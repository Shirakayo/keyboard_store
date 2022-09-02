import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import userSlice from "./slices/userSlice";
import shopSlice from "./slices/shopSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        shop: shopSlice,
        filter: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store