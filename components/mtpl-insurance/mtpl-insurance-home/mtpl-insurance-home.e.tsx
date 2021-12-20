import styled from 'styled-components'

export const HomeBg = styled.div`
    background: #0D4656;
`   
export const HomeBlock = styled.div`
    display:flex;
    padding: 100px 0px 0 60px;
    justify-content:space-between;
    // align-items:center;
    @media(max-width:1440px){
        padding:100px 0 0 0 ;
        flex-direction: column;
    }
`
export const HomeBgItem = styled.div`
    // padding:110px 60px;
    width: 659px;
    @media(max-width:1440px){
        padding: 15px 0 0 26px;
    }
`
export const HomeHeading = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    padding-bottom:10px;
    margin-bottom:10px;
    color: #FFFFFF;
    border-bottom: 1px solid #fff
    
`
export const HomeText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    padding:0;
    margin:0;
    color: #FFFFFF;

`


// 
export const CardService = styled.div`
    display:flex;   
    max-width:960px;
    // @media (max-width:1060px){
    //     flex-direction: column;
    //     align-items: baseline;  
    // }

`
export const CardServiceBlock = styled.div`
    color:#fff;
    padding-top:40px;
@media (max-width:1060px){
    &:last-child{
        display:none
    }

}
`
export const CardServiceHeading = styled.h3`
    margin:0;
    padding:0;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #fff;
    @media (max-width:450px){
       font-size:14px
    }
`
export const CardServiceText = styled.p`
    font-style: normal;
    font-weight: normal;    
    font-size: 18px;
    line-height: 21px;

    color: #fff;

    @media (max-width:450px){
        font-size:13px
     }`