import {AddressType} from "../components/modal/AddressType.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AddressesApi} from "../api/AddressesApi";


const initialState = {
    addressData: {
        id: undefined,
        country: '',
        city: '',
        street: '',
        type: AddressType.OFFICE
    },
    loading: false,
    error: undefined
}

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        updateAddressState: (state, action) => {
            return {...state, addressData: { ...state.addressData, ...action.payload } }
        },
        resetAddressState: () => initialState
    },
    extraReducers: builder => {
        builder.addCase(getAddress.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.addressData = action.payload;
        })
        builder.addCase(getAddress.pending, (state, action) => {
            state.loading = true;
            state.error = undefined;
            state.addressData = action.payload;
        })
        builder.addCase(getAddress.rejected, (state, action) => {
            state.loading = false;
            state.error = "Internal Server Error! Something went wrong.";
            state.addressData = action.payload;
        })
        builder.addCase(createAddress.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.addressData = action.payload;
        })
        builder.addCase(updateAddress.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.addressData = action.payload;
        })
        builder.addCase(deleteAddress.fulfilled, (state, action) => action.payload)
    }
})

export const getAddress = createAsyncThunk(
    'address/get',
    async (id) => await AddressesApi.get(id)
)

export const createAddress = createAsyncThunk(
    'address/create',
    async (addressData) => await AddressesApi.create(addressData)
)

export const updateAddress = createAsyncThunk(
    'address/update',
    async (addressData) => await AddressesApi.update(addressData)
)

export const deleteAddress = createAsyncThunk(
    'address/delete',
    async (id) => await AddressesApi.delete(id)
)

export const { updateAddressState, resetAddressState } = addressSlice.actions

export default addressSlice.reducer;