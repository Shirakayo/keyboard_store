import {$host} from "../index";

export const fetchItems = async (
    itemStatus: string,
    brand?: number,
    type?: number,
) => {
    return await $host.get('item', {
        params: {
            brandId: brand !== 0 ? brand : null,
            typeId: type,
            status: itemStatus
        }
    })
}

export const fetchBrandsApi = async (typeId: number, status: string) => {
    return await $host.get('brand', {
        params: {
            typeId: typeId,
            status: status
        }
    })
}
