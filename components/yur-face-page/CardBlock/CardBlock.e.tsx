import styled from "styled-components";

export const CardBody  = styled.div`
    padding: 40px 50px ;
    background: #FFFFFF;
    width:1478px;
    margin: 40px auto;
    z-index:1;

`
export const CardInfo = styled.div`
    width:798px
`

export const  CradTitle = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    margin:0;
    padding:0

`
export const CardText = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    opacity: 0.5
`
export const CardService = styled.div`
    display:flex;   

`
export const CardServiceBlock = styled.div`
`
export const CardServiceHeading = styled.h3`
    margin:0;
    padding:0;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
`
export const CardServiceText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #000000;

    opacity: 0.5;
`
export const CardBtns = styled.div`
    display:flex;
    justify-content:space-between;
`
export const HorizontalSliderButton = styled.div` 
    max-width: 270px;
    width: 100%;
    span { 
        opacity: 0; 
        visibility: hidden; 
        white-space: nowrap; 
        transition: all 0.4s ease-out; 
    } 
    a { 
        font-family: Roboto; 
        font-style: normal; 
        font-weight: normal; 
        font-size: 24px; 
        line-height: 28px; color: #000000; 
        text-decoration: none; 
        border: 2px solid #0d4656; 
        padding: 10px 20px; 
        display: inline-block; 
        width: 50px; 
        position:relative; 
        transition: width 0.4s ease-out; 
    }

    &:hover { 
        a { 
            width: 95%; 
        } 
        span { 
            opacity: 1; 
            visibility: visible; 
            transition:width 0.4s linear;
         } 
        } 
        .arrow-right 
        { 
            transition:width 0.4s linear; 
            position: absolute; 
            top:50%;
            right:-15%;
            transform: translateY(-50%); 
            background-color: #fff; } 
            `;
    
export const CardButton = styled.button`
            border:none;
            background: #F0803D;
            padding: 14px 40px 15px;
            color:#fff;

`
export const CardBodyContent = styled.div`
    display:flex;
    justify-content: space-between;
`