import { Product } from '../types/product';
import openapi from './openapi.json';

export const products: Product[] = [
  // POLOS
  {
    id: '1',
    name: 'Polo Oversized Negro',
    price: 65.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?w=800',
      'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'
    ],
    colors: ['Negro', 'Blanco', 'Gris'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    description: 'Polo oversized de algodón premium. Corte holgado perfecto para un look aesthetic y cómodo.'
  },
  {
    id: '2',
    name: 'Polo Básico Blanco',
    price: 55.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1667890786367-85853fa47a34?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
      'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=800'
    ],
    colors: ['Blanco', 'Negro', 'Crema'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isOnSale: true,
    originalPrice: 75.90,
    description: 'Polo básico esencial. Material suave y transpirable ideal para cualquier ocasión.'
  },
  {
    id: '3',
    name: 'Polo Graphic Aesthetic',
    price: 79.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1702609342206-c37562b99740?w=800',
      'https://images.unsplash.com/photo-1759308554122-11008075dba1?w=800',
      'https://images.unsplash.com/photo-1711641066067-3c1d03492345?w=800'
    ],
    colors: ['Negro', 'Blanco', 'Gris Oscuro'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    description: 'Polo con diseño gráfico minimalista. Perfecto para expresar tu estilo único.'
  },
  {
    id: '4',
    name: 'Polo Oversized Gris',
    price: 65.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1759308554122-11008075dba1?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
      'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=800'
    ],
    colors: ['Gris', 'Negro', 'Blanco'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Polo oversized en tono gris melange. Versatilidad y comodidad en una sola prenda.'
  },
  {
    id: '5',
    name: 'Polo Streetwear Negro',
    price: 69.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1711641066067-3c1d03492345?w=800',
      'https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'
    ],
    colors: ['Negro', 'Gris Oscuro', 'Blanco'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    description: 'Polo de corte urbano con estilo streetwear. Diseño contemporáneo para looks modernos.'
  },
  {
    id: '6',
    name: 'Polo Minimalista Crema',
    price: 59.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1667890786367-85853fa47a34?w=800',
      'https://images.unsplash.com/photo-1759308554122-11008075dba1?w=800',
      'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=800'
    ],
    colors: ['Crema', 'Blanco', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isOnSale: true,
    originalPrice: 79.90,
    description: 'Polo en tono crema minimalista. Elegancia discreta para tu día a día.'
  },
  {
    id: '7',
    name: 'Polo Oversized Blanco',
    price: 65.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1667890786367-85853fa47a34?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
      'https://images.unsplash.com/photo-1759308554122-11008075dba1?w=800'
    ],
    colors: ['Blanco', 'Negro', 'Gris'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Polo oversized blanco esencial. Base perfecta para cualquier outfit aesthetic.'
  },
  {
    id: '8',
    name: 'Polo Aesthetic Gris Oscuro',
    price: 69.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?w=800',
      'https://images.unsplash.com/photo-1711641066067-3c1d03492345?w=800',
      'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=800'
    ],
    colors: ['Gris Oscuro', 'Negro', 'Gris'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    description: 'Polo en gris oscuro con corte moderno. Sofisticación casual para looks urbanos.'
  },
  {
    id: '9',
    name: 'Polo Básico Negro Premium',
    price: 59.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?w=800',
      'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'
    ],
    colors: ['Negro', 'Blanco', 'Gris'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isOnSale: true,
    originalPrice: 79.90,
    description: 'Polo negro de algodón premium. Suavidad y durabilidad en cada uso.'
  },
  {
    id: '10',
    name: 'Polo Oversized Beige',
    price: 69.90,
    category: 'polo',
    images: [
      'https://images.unsplash.com/photo-1667890786367-85853fa47a34?w=800',
      'https://images.unsplash.com/photo-1759308554122-11008075dba1?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800'
    ],
    colors: ['Beige', 'Crema', 'Blanco'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Polo oversized en tono beige. Neutralidad perfecta para combinar con todo.'
  },

  // PANTALONES
  {
    id: '11',
    name: 'Pantalón Cargo Negro',
    price: 129.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
      'https://images.unsplash.com/photo-1552903905-5e39e774e375?w=800'
    ],
    colors: ['Negro', 'Verde Militar', 'Gris Oscuro'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isNew: true,
    description: 'Pantalón cargo de corte relajado. Múltiples bolsillos para un look funcional y aesthetic.'
  },
  {
    id: '12',
    name: 'Jean Baggy Aesthetic',
    price: 139.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1663243216708-a7831e1a9c55?w=800',
      'https://images.unsplash.com/photo-1612949677014-47e1623c993b?w=800',
      'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800'
    ],
    colors: ['Azul Oscuro', 'Negro', 'Gris'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isOnSale: true,
    originalPrice: 179.90,
    description: 'Jean baggy de mezclilla premium. Corte amplio perfecto para el estilo aesthetic urbano.'
  },
  {
    id: '13',
    name: 'Pantalón Streetwear Gris',
    price: 119.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1552903905-5e39e774e375?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800'
    ],
    colors: ['Gris', 'Negro', 'Beige'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isNew: true,
    description: 'Pantalón de corte streetwear. Diseño moderno con acabados de calidad.'
  },
  {
    id: '14',
    name: 'Cargo Verde Militar',
    price: 134.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
      'https://images.unsplash.com/photo-1552903905-5e39e774e375?w=800'
    ],
    colors: ['Verde Militar', 'Negro', 'Beige'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Pantalón cargo en verde militar. Estilo táctico con toque contemporáneo.'
  },
  {
    id: '15',
    name: 'Jean Baggy Negro',
    price: 139.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1663243216708-a7831e1a9c55?w=800',
      'https://images.unsplash.com/photo-1612949677014-47e1623c993b?w=800',
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800'
    ],
    colors: ['Negro', 'Azul Oscuro', 'Gris'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isOnSale: true,
    originalPrice: 169.90,
    description: 'Jean baggy negro versátil. Comodidad y estilo para tu día a día.'
  },
  {
    id: '16',
    name: 'Pantalón Cargo Beige',
    price: 129.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800',
      'https://images.unsplash.com/photo-1552903905-5e39e774e375?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800'
    ],
    colors: ['Beige', 'Negro', 'Gris'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isNew: true,
    description: 'Cargo en tono beige neutro. Versatilidad y funcionalidad en un solo pantalón.'
  },
  {
    id: '17',
    name: 'Jean Wide Leg Azul',
    price: 144.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1663243216708-a7831e1a9c55?w=800',
      'https://images.unsplash.com/photo-1612949677014-47e1623c993b?w=800',
      'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800'
    ],
    colors: ['Azul Oscuro', 'Negro', 'Azul Claro'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Jean de pierna ancha en azul clásico. Corte relajado y cómodo para todo el día.'
  },
  {
    id: '18',
    name: 'Pantalón Streetwear Negro',
    price: 124.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1552903905-5e39e774e375?w=800',
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800'
    ],
    colors: ['Negro', 'Gris', 'Gris Oscuro'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isOnSale: true,
    originalPrice: 159.90,
    description: 'Pantalón negro de corte urbano. Diseño minimalista con detalles funcionales.'
  },
  {
    id: '19',
    name: 'Cargo Utility Gris Oscuro',
    price: 134.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
      'https://images.unsplash.com/photo-1552903905-5e39e774e375?w=800'
    ],
    colors: ['Gris Oscuro', 'Negro', 'Verde Militar'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    isNew: true,
    description: 'Cargo utility en gris oscuro. Máxima funcionalidad con estilo aesthetic.'
  },
  {
    id: '20',
    name: 'Jean Baggy Gris',
    price: 139.90,
    category: 'pantalon',
    images: [
      'https://images.unsplash.com/photo-1663243216708-a7831e1a9c55?w=800',
      'https://images.unsplash.com/photo-1612949677014-47e1623c993b?w=800',
      'https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?w=800'
    ],
    colors: ['Gris', 'Negro', 'Azul Oscuro'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Jean baggy en tono gris. Estilo relajado perfecto para looks casuales.'
  }
];

const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) || 'https://factubot-texttiles-leon-api.p6eoke.easypanel.host';
const CACHE_KEY = 'products_cache_v1';
const CACHE_TTL_MS = 5 * 60 * 1000;

function readCache(): Product[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts < CACHE_TTL_MS && Array.isArray(data)) return data as Product[];
    return null;
  } catch {
    return null;
  }
}

function writeCache(data: Product[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

async function fetchJSON(url: string): Promise<any> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function findListEndpoint(tag: string): string | null {
  try {
    const paths = (openapi as any)?.paths || {};
    for (const p in paths) {
      const getOp = paths[p]?.get;
      const tags = getOp?.tags;
      const summary = getOp?.summary || '';
      if (Array.isArray(tags) && tags.includes(tag) && /List/i.test(summary)) return p;
    }
  } catch {}
  return null;
}

type ApiProducto = { nombre: string; descripcion?: string | null; precio: string; precio_oferta?: string | null; es_oferta?: boolean | null; estado?: boolean | null; marca_id: number; id_producto: number; };
type ApiVariante = { producto_id: number; color: string[]; talla: string[]; imagen: string[]; id_variante: number; };

function transform(productsApi: ApiProducto[], variantesApi: ApiVariante[]): Product[] {
  const byProduct: Record<number, { colors: string[]; sizes: string[]; images: string[] }> = {};
  for (const v of variantesApi || []) {
    const agg = byProduct[v.producto_id] || { colors: [], sizes: [], images: [] };
    for (const c of v.color || []) if (!agg.colors.includes(c)) agg.colors.push(c);
    for (const s of v.talla || []) if (!agg.sizes.includes(s)) agg.sizes.push(s);
    for (const i of v.imagen || []) if (!agg.images.includes(i)) agg.images.push(i);
    byProduct[v.producto_id] = agg;
  }
  return (productsApi || []).map((p) => {
    const agg = byProduct[p.id_producto] || { colors: [], sizes: [], images: [] };
    const base = parseFloat(p.precio || '0') || 0;
    const offer = p.es_oferta ? parseFloat(p.precio_oferta || '0') || base : undefined;
    const isOnSale = !!p.es_oferta && offer !== undefined;
    const price = isOnSale ? offer! : base;
    const originalPrice = isOnSale ? base : undefined;
    const images = agg.images.length ? agg.images : ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800'];
    const colors = agg.colors.length ? agg.colors : ['Negro'];
    const sizes = agg.sizes.length ? agg.sizes : ['M'];
    return {
      id: String(p.id_producto),
      name: p.nombre,
      price,
      originalPrice,
      category: 'polo',
      images,
      colors,
      sizes,
      isNew: false,
      isOnSale,
      description: p.descripcion || ''
    };
  });
}

export async function refreshProducts(force = false): Promise<Product[]> {
  if (!force) {
    const cached = readCache();
    if (cached) {
      products.splice(0, products.length, ...cached);
      return products;
    }
  }
  const prodPath = findListEndpoint('productos') || '/productos/';
  const varPath = findListEndpoint('variantes_productos') || '/variantes/';
  try {
    const prodRes = await fetchJSON(`${API_BASE_URL}${prodPath}?page=1&page_size=50`);
    const varRes = await fetchJSON(`${API_BASE_URL}${varPath}?page=1&page_size=200`);
    const prodRaw = prodRes?.data;
    const varRaw = varRes?.data;
    const prodData = Array.isArray(prodRaw?.items) ? prodRaw.items : Array.isArray(prodRaw) ? prodRaw : null;
    const varData = Array.isArray(varRaw?.items) ? varRaw.items : Array.isArray(varRaw) ? varRaw : null;
    if (!prodData || !varData) throw new Error('Validation failed');
    const transformed = transform(prodData as ApiProducto[], varData as ApiVariante[]);
    if (!Array.isArray(transformed)) throw new Error('Validation failed');
    products.splice(0, products.length, ...transformed);
    writeCache(transformed);
    return products;
  } catch (e) {
    const cached = readCache();
    if (cached) {
      products.splice(0, products.length, ...cached);
      return products;
    }
    throw e as Error;
  }
}

void refreshProducts(false);
