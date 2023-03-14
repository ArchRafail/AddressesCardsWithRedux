import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    createAddress,
    getAddress,
    resetAddressState,
    updateAddress,
    updateAddressState
} from "../../store/addressSlice";
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {AddressType} from "../modal/AddressType.ts";
import './AddressForm.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';


export function AddressForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const address = useSelector(state => state.address);
    const navigate = useNavigate();
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        if (id) {
            dispatch(getAddress(id));
            setSubmitDisabled(false);
        }
        return () => {
            abortController.abort();
            dispatch(resetAddressState());
        }
    }, [])

    const handleFormChange = (event) => {
        setSubmitDisabled(true)
        const target = event.target;
        const name = target.name;
        const value = target.value;
        dispatch(updateAddressState({[name] : value }))
        if (blankAudit() && value !== "") setSubmitDisabled(false);
    }

    const saveAddress = (event) => {
        event.preventDefault();
        setSubmitDisabled(true);
        if (id) {
            dispatch(updateAddress(address)).then(() => navigate("/addresses"));
        } else {
            dispatch(createAddress(address)).then(() => navigate("/addresses"))
        }
    }

    const blankAudit = () => {
        if (address.country.toString().trim().length === 0) {
            return false;
        }
        if (address.city.toString().trim().length === 0) {
            return false;
        }
        return address.street.toString().trim().length !== 0;
    }

    const getBack = () => {
        dispatch(resetAddressState());
        navigate('/addresses', { replace: true });
    }

    return (
        <div className="container">
            <form onSubmit={saveAddress}>
                <h3>{id ? 'Update' : 'Add'} address {id && '#' + id}</h3>
                <TextField label="Country" name="country" value={address.country} onChange={handleFormChange} className="input"></TextField>
                <TextField label="City" name="city" value={address.city} onChange={handleFormChange} className="input"></TextField>
                <TextField label="Street" name="street" value={address.street} onChange={handleFormChange} className="input"></TextField>
                <div className="address-type">
                    <div className="internal-address">
                        <FormLabel component="legend" >Address type:</FormLabel>
                        <RadioGroup aria-label="addressType" name="type" onChange={handleFormChange}>
                            <FormControlLabel value="HOME" control={<Radio/>} label="Home" checked={address.type === AddressType.HOME} />
                            <FormControlLabel value="OFFICE" control={<Radio/>} label="Office" checked={address.type === AddressType.OFFICE} />
                        </RadioGroup>
                    </div>
                </div>
                <div className="buttons-group">
                    <Button type="button" variant="contained" className="button" onClick={getBack} startIcon={<ArrowBackIosNewOutlinedIcon/>}>Back</Button>
                    <Button type="submit" variant="contained" className="button" disabled={submitDisabled} endIcon={<SaveOutlinedIcon/>}>Save</Button>
                </div>
            </form>
        </div>
    )
}