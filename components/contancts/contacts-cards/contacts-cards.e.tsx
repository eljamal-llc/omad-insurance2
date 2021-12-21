import styled from "styled-components";

export const CardsHead = styled.div`
    display: flex;
    justify-content: space-around;
    background-color:  #0D4656;;
`
export const CardsHeadItem = styled.div`
    width: 40%;
    padding: 40px 50px 5px;
    display: flex;
    flex-direction: column-reverse  ;
    &:first-child{
        border-right: 2px solid #fff;
    }
`
export const CardsText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;
`
export const CardsTextMini = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
`
// cards
export const CardImg = styled.div`
    padding: 0px 0 0px;
    margin: 0;
    min-width: 431px;
`   
export const CardContacts = styled.div`
        padding: 40px 40px;
        display: flex;
        align-items: center;
        &:nth-child(even){
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }
`
export const CardContactsHeading = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
`
export const CardContactsText = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color:#a0a0a0;

`
export const CardsData = styled.div`
    width: 40%;
    padding: 0px 50px 5px;
`
export const MLoc = styled.span`
    font-size: 20px;
    padding: 0px 3px;
    color: #fff;
    width: 30px;
    border-radius: 50%;
    background-color: #0D4656;
    text-align: center;
`
export const CardAdress = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
/* identical to box height */
    color: #000000;
`