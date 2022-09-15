import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import userSlice from "./slices/userSlice";
import shopSlice from "./slices/shopSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        shop: shopSlice,
        filter: filterSlice,
        cart: cartSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store