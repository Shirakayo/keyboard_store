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
    sortedType: '';
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
    sortedType?: string;
}

export interface fetchBrandsValue {
    typeId: number;
    status: string;
}

type brands = {
    brand: string;
}

type devices = {
    count: number;
    rows: []
}

export interface getItemsFetch {
    devices: devices[]
    returnBrands: brands[]
}