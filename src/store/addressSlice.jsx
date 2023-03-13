import {AddressType} from "../components/modal/AddressType.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AddressesApi} from "../api/AddressesApi";


const initialState = {
    id: undefined,
    country: '',
    city: '',
    street: '',
    type: AddressType.OFFICE
}

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        updateAddressState: (state, action) => {
            return {...state, ...action.payload}
        },
        resetAddressState: () => initialState
    },
    extraReducers: builder => {
        builder.addCase(getAddress.fulfilled, (state, action) => action.payload)
        builder.addCase(createAddress.fulfilled, (state, action) => action.payload)
        builder.addCase(updateAddress.fulfilled, (state, action) => action.payload)
        builder.addCase(deleteAddress.fulfilled, (state, action) => action.payload)
    }
})

export const getAddress = createAsyncThunk(
    'address/get',
    async (id) => await AddressesApi.get(id)
)

export const createAddress = createAsyncThunk(
    'address/create',
    async (address) => await AddressesApi.create(address)
)

export const updateAddress = createAsyncThunk(
    'address/update',
    async (address) => await AddressesApi.update(address)
)

export const deleteAddress = createAsyncThunk(
    'address/delete',
    async (id) => await AddressesApi.delete(id)
)

export const { updateAddressState, resetAddressState } = addressSlice.actions

export default addressSlice.reducer;