import styled from "styled-components";

export const asab  = styled.p`
    color:red;
`
export const ContainerHero = styled.div`
    color: #FFFFFF;
    background: url(${(props)=>props.imgUrl});
    width: 100%;
    height: 600px;
    // background-size:cover;
    background-repeat: no-repeat;

`
export const HeroBgItem = styled.div`
    width: 976px;
    padding: 106px 0 0 182px;
`
export const PageHeading = styled.h2`
    font-size: 72px;
    line-height: 84px;
    text-transform: uppercase;
    margin:0;
    padding-bottom:10px;
    border-bottom: 1px solid #ffff;
`
export const  PageText = styled.p`
    font-size: 18px;
    line-height: 21px;
    color:#fff;
    margin-top:1px;
`