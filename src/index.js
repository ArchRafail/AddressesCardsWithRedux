import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AddressesList} from "./components/AddressesList";
import {AddressForm} from "./components/AddressForm";
import {Provider} from "react-redux";
import store from "./store/store";
import {PageNotFound} from "./components/PageNotFound";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="" element={<Navigate replace to="/addresses" />} />
                    <Route path="addresses" element={<AddressesList/>}/>
                    <Route path="addresses/item/:id" element={<AddressForm/>} />
                    <Route path="addresses/item" element={<AddressForm/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
