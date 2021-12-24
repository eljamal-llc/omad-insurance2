import styled from "styled-components";


export const ContactsHomeBG  = styled.div`
        background: #0D4656;
        padding: 88px 0 0px 16px;
        @media(max-width:1024px){
            background: url('./contactssss.png');
            background-repeat: no-repeat;
            padding: 500px 0 0 0 ;
        }

`

export const ContactsHomeBlock = styled.div`
    display: flex;
        @media(max-width:1024px){
            background: #0D4656;
            padding: 0;
        }
`

export const ContactsBlock = styled.div`
    width:576px;
    padding: 30px 30px;



`
export const ContactsBlockHeading = styled.h2`
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    text-transform: uppercase;

    color: #FFFFFF;
    @media(max-width:425px){
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase
    }
`
export const ContactsBlockSlogan = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #FFFFFF;
    @media(max-width:425px){
        font-size: 24px;
        line-height: 18px;
        text-transform: uppercase
    }
`
    
export const ContactsBlockLokations = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
    @media(max-width:425px){
        font-size: 16px
    }
`

// 
export const ConImg =  styled.div`
    @media(max-width:1024px){
        display: none;
    }

`