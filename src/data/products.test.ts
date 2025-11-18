import { describe, it, expect, beforeEach, vi } from 'vitest';
import { refreshProducts, products } from './products';

const makeResponse = (data: any, ok = true, status = 200) => ({
  ok,
  status,
  json: async () => data,
});

beforeEach(() => {
  vi.restoreAllMocks();
  const store: Record<string, string> = {};
  (globalThis as any).localStorage = {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => { store[k] = v; },
    removeItem: (k: string) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    key: (i: number) => Object.keys(store)[i] ?? null,
    length: 0,
  } as any;
});

it('integrates with API and transforms data', async () => {
  const prodPayload = {
    success: true,
    code: 200,
    message: '',
    data: {
      items: [
        {
          id_producto: 1,
          nombre: 'Producto A',
          descripcion: 'Desc A',
          precio: '100',
          precio_oferta: '80',
          es_oferta: true,
          marca_id: 2,
        },
      ],
    },
  };
  const varPayload = {
    success: true,
    code: 200,
    message: '',
    data: {
      items: [
        {
          producto_id: 1,
          color: ['Negro', 'Blanco'],
          talla: ['M', 'L'],
          imagen: ['https://example.com/img1.jpg', 'https://example.com/img2.jpg'],
          id_variante: 10,
        },
      ],
    },
  };

  const fetchSpy = vi.spyOn(globalThis, 'fetch' as any).mockImplementation(async (url: string) => {
    if (url.includes('/productos/')) return makeResponse(prodPayload);
    if (url.includes('/variantes/')) return makeResponse(varPayload);
    return makeResponse({}, false, 404);
  });

  const result = await refreshProducts(true);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(1);
  const p = result[0];
  expect(p.id).toBe('1');
  expect(p.name).toBe('Producto A');
  expect(p.price).toBe(80);
  expect(p.originalPrice).toBe(100);
  expect(p.isOnSale).toBe(true);
  expect(p.images.length).toBeGreaterThan(0);
  expect(p.colors).toEqual(['Negro', 'Blanco']);
  expect(p.sizes).toEqual(['M', 'L']);
  expect(products[0].name).toBe('Producto A');
  expect(fetchSpy).toHaveBeenCalledTimes(2);
});

it('uses cache when available and skips fetch', async () => {
  const cached = [{
    id: '99',
    name: 'Cached',
    price: 10,
    category: 'polo',
    images: ['https://example.com/img.jpg'],
    colors: ['Negro'],
    sizes: ['M'],
    description: '',
  }];
  localStorage.setItem('products_cache_v1', JSON.stringify({ ts: Date.now(), data: cached }));

  const fetchSpy = vi.spyOn(globalThis, 'fetch' as any).mockImplementation(async () => makeResponse({}, true, 200));

  const result = await refreshProducts(false);
  expect(result[0].id).toBe('99');
  expect(fetchSpy).not.toHaveBeenCalled();
});

it('falls back to cache on network error, otherwise throws', async () => {
  const cached = [{
    id: '100',
    name: 'Cached Fallback',
    price: 20,
    category: 'polo',
    images: ['https://example.com/img.jpg'],
    colors: ['Negro'],
    sizes: ['M'],
    description: '',
  }];
  localStorage.setItem('products_cache_v1', JSON.stringify({ ts: Date.now(), data: cached }));

  vi.spyOn(globalThis, 'fetch' as any).mockImplementation(async () => {
    throw new Error('Network failure');
  });

  const result = await refreshProducts(true);
  expect(result[0].id).toBe('100');
});

it('throws when no cache and API invalid', async () => {
  localStorage.clear();
  vi.spyOn(globalThis, 'fetch' as any).mockImplementation(async () => makeResponse({ data: null }, true, 200));
  await expect(refreshProducts(true)).rejects.toBeTruthy();
});