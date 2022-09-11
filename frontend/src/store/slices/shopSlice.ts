import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchItemsProps, shopSliceState, shopStatus} from "../../types/shopSlice-type/shopSlice-type";
import {RootState} from "../store";
import {fetchItemInfo, fetchItems} from "../../http/api/shopApi";


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
		const {data} = await fetchItems(itemStatus, brand, type, sortedType)
		return {
			count: data.devices.count,
			items: data.devices.rows,
			brands: data.returnBrands
		}
	})

export const fetchInfoForItem = createAsyncThunk('shop/fetchInfoItem',
	async (id: string) => {
		const {data} = await fetchItemInfo(id)
		return data
	}
)

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
		
		builder.addCase(fetchShopItems.rejected, (state) => {
			state.status = shopStatus.ERROR
			state.items = []
		})
		
		builder.addCase(fetchInfoForItem.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = shopStatus.SUCCESS
		})
		
		builder.addCase(fetchInfoForItem.rejected, (state) => {
			state.items = []
			state.status = shopStatus.ERROR
		})
	}
})


export const shopSelector = (state: RootState) => state.shop;

export const {editItemStatus, clearShopItem, changeSortedType} = shopSlice.actions
export default shopSlice.reducer;