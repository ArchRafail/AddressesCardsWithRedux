import {useEffect} from "react";
import './AddressesList.css';
import {Address} from "./Address";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAddressesList} from "../../store/addressesListSlice";
import {deleteAddress} from "../../store/addressSlice";


export function AddressesList() {
    const { addresses, loading } = useSelector((state) => state.addressesList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const abortController = new AbortController();
        getAddresses();
        return () => {
            abortController.abort();
        };
    }, [])

    const getAddresses = () => dispatch(getAddressesList())

    const addAddress = () => {
        navigate('/addresses/item', { replace: true });
    }

    const addressUpdate = (id) => {
        navigate('/addresses/item/'+id, { replace: true });
    }

    const deleteAddressById = (id) => {
        dispatch(deleteAddress(id)).then(() => getAddresses());
    }

    return (
        <>
            <div className="top-line">
                <h1>Addresses:</h1>
                <div className="buttons-wrapper">
                    <Button className="button" variant="contained" onClick={addAddress} startIcon={<AddIcon/>}>Add address</Button>
                    <Button className="button" variant="contained" onClick={getAddresses} startIcon={<AutorenewIcon/>}>Refresh</Button>
                </div>
            </div>

            {
                loading &&
                <div className="loaderContainer">
                    <div className="innerContainer">
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <p>Loading addresses...</p>
                    </div>
                </div>
            }

            {
                !loading && !addresses.length && <div className="no-data">Addresses not found</div>
            }

            {
                !loading && addresses.length &&
                <div className="addresses">
                    {
                        addresses.map(address =>
                        <Address key={address.id} id={address.id} country={address.country} city={address.city}
                                 street={address.street} type={address.type} onAddressUpdate={addressUpdate} onDeleteAddress={deleteAddressById}/>
                    )}
                </div>
            }
        </>
    )
}