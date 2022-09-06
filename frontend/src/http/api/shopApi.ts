import {$host} from "../index";

export const fetchItems = async (
    itemStatus: string,
    brand?: number,
    type?: number,
    sortedType?: string
) => {
    return await $host.get('item', {
        params: {
            brandId: brand !== 0 ? brand : null,
            typeId: type,
            status: itemStatus,
            sortType: sortedType === '' ? null : sortedType
        }
    })
}

export const fetchItemInfo = async (
    id: string
) => {
    return await $host.get(`item/${id}`)
}

