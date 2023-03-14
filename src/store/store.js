import addressSlice from './addressSlice';
import addressesListSlice from "./addressesListSlice";
import {configureStore} from "@reduxjs/toolkit";


export default configureStore({
    reducer: {
        addressesList: addressesListSlice,
        address: addressSlice
    }
})