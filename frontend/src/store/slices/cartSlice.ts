import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {addCartItem, deleteCartItem, fetchItems} from "../../http/api/cartApi";
import {Status} from "../../types/userSlice-types/userSlice-types";

const initialState = {
  cartItems: [],
  viewModal: false,
  cartStatus: Status.DEFAULT
};

export const addItemToCard = createAsyncThunk('cart/addItemToCard',
    async (id: number) => {
      const {data} = await addCartItem(id)
      return data
})

export const deleteItemFromCard = createAsyncThunk('cart/deleteItemFromCard',
    async (id: number) => {
      const {data} = await deleteCartItem(id)
      return data
    })


export const fetchCardItem = createAsyncThunk('cart/fetchCardItem',
    async () => {
      const {data} = await fetchItems();
      return data
    }
    )

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeModalState(state, action) {
      state.viewModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addItemToCard.fulfilled, (state) => {
      state.viewModal = true;
    })

    builder.addCase(addItemToCard.pending, (state) => {
      state.cartStatus = Status.LOADING
    })

    builder.addCase(addItemToCard.rejected, (state) => {
      state.cartStatus = Status.ERROR
    })

    builder.addCase(deleteItemFromCard.fulfilled, (state) => {
      state.cartStatus = Status.SUCCESS
    })

    builder.addCase(deleteItemFromCard.pending, (state) => {
      state.cartStatus = Status.LOADING
    })

    builder.addCase(deleteItemFromCard.rejected, (state) => {
      state.cartStatus = Status.ERROR
    })

    builder.addCase(fetchCardItem.fulfilled, (state, action: { payload: any }) => {
      state.cartItems = action.payload;
      state.cartStatus = Status.SUCCESS
    })

    builder.addCase(fetchCardItem.pending, (state) => {
      state.cartStatus = Status.LOADING
    })

    builder.addCase(fetchCardItem.rejected, (state) => {
      state.cartItems = []
      state.cartStatus = Status.ERROR
    })

  }

  });

export const cartSelector = (state: RootState) => state.cart;

export const {changeModalState} = cartSlice.actions;
export default cartSlice.reducer;