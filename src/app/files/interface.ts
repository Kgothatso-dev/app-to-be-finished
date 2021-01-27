export interface IProduct{
    id: string;
    name: string;
    description: string[];
    price: number;
    category_id: string;
    image: string;
    rate: number;
    available: boolean;
}

export interface ICategory{
    id: string;
    name: string;
    image: string;
    color: string;
}

export interface ICart{
    id: string,
    name: string;
    description: string[];
    price: number;
    image: string;
    quantity: number;
    rate: number;
    category_id: string;
}

export interface IPopular{
    id: string;
    product: IProduct;
}


export interface IUser{
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface IOrder{
    id: string;
    items: ICart[];
    date: Date;
    user_id: string;
    status: number;
}

export interface IMapboxOutput{
    attribution: string;
    features: IFeature[];
    query: [];
}

export interface IFeature {
    place_name: string;
}