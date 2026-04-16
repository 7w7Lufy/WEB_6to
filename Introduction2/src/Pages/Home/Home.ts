import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

interface Products{
  id: number;
  created_at: Date;
  name: string;
  description: string;
  price: number;
  out_price: number;
  url_image: string;
  stock: number;
  category: string;
}

interface ProductRow {
  id: number;
  created_at: string;
  name: string;
  description: string;
  price: number;
  out_price: number;
  url_image: string;
  stock: number;
  category: string;
}

const PRODUCTS_TABLE = 'products' as const;

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './Home.html',
  styleUrl: './Home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly fb = new FormBuilder();
  private readonly supabase =
    environment.API_URL && environment.Publishable_Key
      ? createClient(environment.API_URL, environment.Publishable_Key)
      : null;

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly showForm = signal(false);
  readonly submitted = signal(false);
  readonly products = signal<Products[]>([]);

  readonly productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    category: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1)]],
    out_price: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    description: [''],
    url_image: [''],
  });

  constructor() {
    if (!this.supabase) {
      this.error.set('Falta configurar las credenciales de Supabase en environment.');
      return;
    }

    void this.loadProducts();
  }

  onToggleForm(): void {
    this.showForm.update((value) => !value);

    if (!this.showForm()) {
      this.resetForm();
    }
  }

  onCancelForm(): void {
    this.showForm.set(false);
    this.resetForm();
  }

  async onSubmitProduct(): Promise<void> {
    this.submitted.set(true);
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    if (!this.supabase) {
      this.error.set('No se pudo conectar a Supabase. Revisa las credenciales.');
      return;
    }

    const form = this.productForm.getRawValue();
    const payload = {
      name: form.name ?? '',
      description: form.description ?? '',
      price: Number(form.price ?? 0),
      out_price: Number(form.out_price ?? 0),
      url_image: form.url_image ?? '',
      stock: Number(form.stock ?? 0),
      category: form.category ?? '',
    };

    if (payload.price <= 0 || payload.out_price <= 0 || payload.stock < 0) {
      this.error.set('Hay valores invalidos. Verifica costo, venta y stock.');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const { data, error } = await this.insertProduct(payload);

    this.loading.set(false);

    if (error) {
      this.error.set(this.getSupabaseErrorMessage('guardar', error.message));
      return;
    }

    if (data) {
      this.products.update((items) => [...items, this.mapRow(data as ProductRow)]);
    }

    this.showForm.set(false);
    this.resetForm();
  }

  hasError(controlName: keyof typeof this.productForm.controls, errorName: string): boolean {
    const control = this.productForm.controls[controlName];
    return !!control && control.hasError(errorName) && (control.touched || this.submitted());
  }

  private resetForm(): void {
    this.submitted.set(false);
    this.productForm.reset({
      name: '',
      category: '',
      price: 0,
      out_price: 0,
      stock: 0,
      description: '',
      url_image: '',
    });
  }

  private async loadProducts(): Promise<void> {
    if (!this.supabase) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const { data, error } = await this.selectProducts();

    this.loading.set(false);

    if (error) {
      this.error.set(this.getSupabaseErrorMessage('cargar', error.message));
      return;
    }

    this.products.set((data ?? []).map((row) => this.mapRow(row as ProductRow)));
  }

  private mapRow(row: ProductRow): Products {
    return {
      id: Number(row.id),
      created_at: new Date(row.created_at),
      name: row.name ?? '',
      description: row.description ?? '',
      price: Number(row.price ?? 0),
      out_price: Number(row.out_price ?? 0),
      url_image: row.url_image ?? '',
      stock: Number(row.stock ?? 0),
      category: row.category ?? '',
    };
  }

  private async selectProducts(): Promise<{ data: ProductRow[] | null; error: { message: string } | null }> {
    if (!this.supabase) {
      return { data: null, error: { message: 'Cliente de Supabase no disponible.' } };
    }

    const { data, error } = await this.supabase
      .schema('public')
      .from(PRODUCTS_TABLE)
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      return { data: null, error: { message: error.message } };
    }

    return { data: (data as ProductRow[]) ?? [], error: null };
  }

  private async insertProduct(
    payload: Omit<ProductRow, 'id' | 'created_at'>
  ): Promise<{ data: ProductRow | null; error: { message: string } | null }> {
    if (!this.supabase) {
      return { data: null, error: { message: 'Cliente de Supabase no disponible.' } };
    }

    const { data, error } = await this.supabase
      .schema('public')
      .from(PRODUCTS_TABLE)
      .insert(payload)
      .select('*')
      .single();

    if (error) {
      return { data: null, error: { message: error.message } };
    }

    return { data: data as ProductRow, error: null };
  }

  private getSupabaseErrorMessage(action: 'cargar' | 'guardar', detail: string): string {
    if (detail.includes('row-level security') || detail.includes('permission denied')) {
      return `No se pudo ${action} por permisos (RLS). Habilita politicas SELECT/INSERT para anon.`;
    }

    return `No se pudo ${action}: ${detail}`;
  }
}
