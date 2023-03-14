import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="page-not-found">
            <img src="/404Error.JPG" alt="HTTP 404. Page not found."/>
            <h1 className="anonymous-page">Oops, page not found.</h1>
            <Button type="button" variant="contained" className="button"
                    onClick={() => navigate('/addresses', { replace: true })}
                    startIcon={<HomeOutlinedIcon/>}>Go home</Button>
        </div>
    )
}