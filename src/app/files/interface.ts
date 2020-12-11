export interface IProduct{
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export interface ICategory{
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface ICart{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}


export interface IPopular{
    id: string;
    product: IProduct;
}


export interface IUser{
    id: string;
    name: string;
    email: string;
}