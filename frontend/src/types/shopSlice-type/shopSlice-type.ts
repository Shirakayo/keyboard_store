export type itemsForShop = {
    name: string;
    price: number;
    category: number;
    type: number;
    id: number;
    status: string;
    img: string;
}

type NameProps = {
    brand: string;
}

export type BrandForShop = {
    id: number;
    name: NameProps[];
}


export interface shopSliceState {
    items: itemsForShop[],
    count: number;
    brands: BrandForShop[];
    itemStatus: string;
    type: number;
    limit: number;
    page: number;
    status: string;
}

export const enum shopStatus {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface fetchItemsProps {
    type?: number;
    brand?: number;
    itemStatus: string;
}

export interface fetchBrandsValue {
    typeId: number;
    status: string;
}