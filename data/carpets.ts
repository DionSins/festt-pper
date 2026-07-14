export interface Carpet {
  id: string
  name: string
  size: 'small' | 'medium' | 'large'
  color: string
  pattern: string
  price: number
  description: string
  image?: string
}

export const carpets: Carpet[] = [
  {
    id: 'med-red-01',
    name: 'Crimson Dream',
    size: 'small',
    color: 'Deep Red',
    pattern: 'Traditional geometric',
    price: 150,
    description: 'A vibrant Mediterranean red carpet with intricate geometric patterns.',
  },
  {
    id: 'med-red-02',
    name: 'Crimson Dream',
    size: 'medium',
    color: 'Deep Red',
    pattern: 'Traditional geometric',
    price: 250,
    description: 'A vibrant Mediterranean red carpet with intricate geometric patterns.',
  },
  {
    id: 'med-red-03',
    name: 'Crimson Dream',
    size: 'large',
    color: 'Deep Red',
    pattern: 'Traditional geometric',
    price: 400,
    description: 'A vibrant Mediterranean red carpet with intricate geometric patterns.',
  },
  {
    id: 'med-blue-01',
    name: 'Azure Elegance',
    size: 'small',
    color: 'Mediterranean Blue',
    pattern: 'Ornate floral',
    price: 160,
    description: 'Rich blue tones with elegant floral designs reminiscent of coastal villages.',
  },
  {
    id: 'med-blue-02',
    name: 'Azure Elegance',
    size: 'medium',
    color: 'Mediterranean Blue',
    pattern: 'Ornate floral',
    price: 270,
    description: 'Rich blue tones with elegant floral designs reminiscent of coastal villages.',
  },
  {
    id: 'med-blue-03',
    name: 'Azure Elegance',
    size: 'large',
    color: 'Mediterranean Blue',
    pattern: 'Ornate floral',
    price: 420,
    description: 'Rich blue tones with elegant floral designs reminiscent of coastal villages.',
  },
  {
    id: 'med-tan-01',
    name: 'Desert Oasis',
    size: 'small',
    color: 'Golden Tan',
    pattern: 'Tribal motifs',
    price: 140,
    description: 'Warm golden tones with traditional tribal patterns for a cozy atmosphere.',
  },
  {
    id: 'med-tan-02',
    name: 'Desert Oasis',
    size: 'medium',
    color: 'Golden Tan',
    pattern: 'Tribal motifs',
    price: 230,
    description: 'Warm golden tones with traditional tribal patterns for a cozy atmosphere.',
  },
  {
    id: 'med-tan-03',
    name: 'Desert Oasis',
    size: 'large',
    color: 'Golden Tan',
    pattern: 'Tribal motifs',
    price: 380,
    description: 'Warm golden tones with traditional tribal patterns for a cozy atmosphere.',
  },
]

export const packages = [
  {
    id: 'pkg-10',
    name: '10 Carpet Package',
    quantity: 10,
    discount: 15,
    description: 'Perfect for small to medium events',
  },
  {
    id: 'pkg-15',
    name: '15 Carpet Package',
    quantity: 15,
    discount: 20,
    description: 'Great for larger gatherings',
  },
  {
    id: 'pkg-20',
    name: '20 Carpet Package',
    quantity: 20,
    discount: 25,
    description: 'Ideal for grand events and venues',
  },
]
