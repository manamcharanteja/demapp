// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4',
    price: 39.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
    {
    id: 5,
    name: 'Product 5',
    description: 'Description for Product 5',
    price: 59.99,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
];