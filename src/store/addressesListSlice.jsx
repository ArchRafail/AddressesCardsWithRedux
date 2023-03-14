import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AddressesApi} from "../api/AddressesApi";


const initialState = {
    addresses: []
};

export const addressesListSlice = createSlice({
    name: "addressesList",
    initialState,
    reducers: {
        updateAddressesListState: (state, action) => {
            return {...state, addresses: [...state.addresses, action.payload]}
        },
        resetAddressesListState: () => initialState
    },
    extraReducers: builder => {
        builder.addCase(getAddressesList.fulfilled, (state, action) => action.payload)
    }
})

export const getAddressesList = createAsyncThunk(
    'addresses/get',
    async () => await AddressesApi.getAll()
)

export const { updateAddressesListState, resetAddressesListState } = addressesListSlice.actions

export default addressesListSlice.reducer;