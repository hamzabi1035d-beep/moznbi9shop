export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  hoverImage: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
