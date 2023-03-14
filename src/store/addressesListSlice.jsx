import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AddressesApi} from "../api/AddressesApi";


const initialState = {
    addresses: [],
    loading: false
};

export const addressesListSlice = createSlice({
    name: "addressesList",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAddressesList.pending, (state, action) => {
            state.loading = true;
            state.addresses = action.payload;
    })
        builder.addCase(getAddressesList.fulfilled, (state, action) => {
            state.loading = false;
            state.addresses = action.payload;
        })
    }
})

export const getAddressesList = createAsyncThunk(
    'addresses/get',
    async () => await AddressesApi.getAll()
)

export default addressesListSlice.reducer;