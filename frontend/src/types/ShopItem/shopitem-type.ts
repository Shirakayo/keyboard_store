export interface shopItemProps {
    item: itemsProps
}

type itemsProps = {
    img: string;
    id: number;
    name: string;
    price: number;
    status: string;
    brandId?: number;
    typeId?: number;
}