import { TextField } from "@mui/material";
import styled from "styled-components";



export const SNumber = styled(TextField)`
    background: #F1F1F1;
    /* padding: 30px 20px; */
    width: 365px;
    border: none;
    margin-top:20px ;
    margin-bottom: 20px;
    margin-left: 50px !important;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    @media(max-width:425px){
        width:285px;  
        margin-left: 0px;

    }
`
export const UserHome = styled(TextField)`
    background: #F1F1F1;
    /* padding: 30px 20px; */
    width: 170px;
    border: none;
    margin:20px 0 ;
    /* margin-left: 50px; */
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    
`
export const UserApartment = styled(TextField)`
    background: #F1F1F1;
    /* padding: 30px 20px; */
    width: 170px;
    border: none;
    margin:20px 0 ;
    margin-left: 50px;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    
`