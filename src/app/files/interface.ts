export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export interface Category{
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface Cart{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}


export interface Popular{
    id: string;
    product: Product;
}


export interface User{
    id: string;
    name: string;
    email: string;
}