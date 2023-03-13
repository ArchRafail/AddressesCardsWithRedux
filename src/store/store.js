import addressSlice from './addressSlice'
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        address: addressSlice
    }
})