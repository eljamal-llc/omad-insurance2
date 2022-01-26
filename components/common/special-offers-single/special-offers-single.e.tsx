import styled from 'styled-components'



export const PageTitle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #000000;
    @media(max-width:425px){
        font-size: 30px;
    }

`
export const PageDes = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
`
export const MiniTitle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;

    color: #000000;

`
export const Kopite = styled.div`
    max-width: 948px;
    @media(max-width:425px){
        max-width:300px
    }
`
export const HighBlock = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto ; 
    align-items: center;
    @media(max-width:425px){
        flex-direction: column;

    }
`
export const CardBlock = styled.div`
    height: 580px;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #fff;
`
export const SpecBlock = styled.div`
    background-color: #E5E5E5;
    padding: 150px 20px ;
    min-height: 100vh;
`
export const Uslovs = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
    @media(max-width:425px){
        font-size: 20px;
        line-height: 24px;
    }

`
export const CenterTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top:40px;
    color: #000000;

`
export const CardTitle = styled.h5`
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 43px;
    line-height: 43px;
    text-align: center;
    color: #000000;
    margin: 0;


`