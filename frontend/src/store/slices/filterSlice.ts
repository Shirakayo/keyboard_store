import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

const initialState = {
    brand: 0
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectedBrand(state,action) {
            state.brand = action.payload;
        }
    }
    }
)

export const filterSelector = (state: RootState) => state.filter;

export const { selectedBrand } = filterSlice.actions

export default filterSlice.reducer;