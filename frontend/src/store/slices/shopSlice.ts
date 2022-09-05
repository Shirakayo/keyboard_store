import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchItemsProps, shopSliceState, shopStatus} from "../../types/shopSlice-type/shopSlice-type";
import {RootState} from "../store";
import {fetchItems} from "../../http/api/shopApi";


const initialState: shopSliceState = {
    items: [],
    count: 0,
    brands: [],
    sortedType: '',
    limit: 0,
    page: 1,
    itemStatus: 'Group-buy',
    status: shopStatus.LOADING
}

export const fetchShopItems = createAsyncThunk<{}, fetchItemsProps>('shop/fetchItems',
    async ({brand, type, itemStatus, sortedType}) => {
    try {
        const {data} = await fetchItems(itemStatus, brand, type, sortedType)
        return {
            count: data.devices.count,
            items: data.devices.rows,
            brands: data.returnBrands
        }
    } catch (error) {
        console.log(error)
    }
})

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        editItemStatus(state, action) {
            state.itemStatus = action.payload
        },
        clearShopItem(state) {
            state.items = []
        },
        changeSortedType(state, action) {
            state.sortedType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShopItems.fulfilled, (state, action: { payload: any }) => {
            state.items = action.payload.items
            state.brands = action.payload.brands
            state.count = action.payload.count
            state.status = shopStatus.SUCCESS
        })
    }
})


export const shopSelector = (state: RootState) => state.shop;

export const { editItemStatus, clearShopItem, changeSortedType } = shopSlice.actions
export default shopSlice.reducer;