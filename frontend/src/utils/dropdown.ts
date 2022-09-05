export interface sortListItem {
    id: number;
    name: string;
    type: string;
}


export const sortedList: sortListItem[] = [
    {
       id: 1, name: 'Alphabetically, A-Z', type: 'a_desc'
    },
    {
        id: 2, name: 'Alphabetically, Z-A', type: 'a_asc'
    },
    {
        id: 3, name: 'Price, low to high', type: 'price_asc'
    },
    {
        id: 4, name: 'Price, high to low', type: 'price_desc'
    },
    {
        id: 5, name: 'Date, old to new', type: 'date_asc'
    },
    {
        id: 6, name: 'Date, new to old', type: 'date_desc'
    }
]