import styled from "styled-components";

export const AggentsTable = styled.table`
   width: 1478px;
    height: 391px;
    border-collapse: collapse;
    margin-bottom: 220px;
    @media(max-width:425px){
        display:none;
    }

`
export const AgentsTd = styled.td`
    border: 1px solid #000;
    margin: 0;
    padding: 0;
    &.oneT {
        width: 726px;
        height: 152px;
        padding: 0 0  0 50px  ;

    }
    &.twoT{
        width: 376px;

    }
    &.threeT{
        width: 376px;
        
    }
`
export const AgentsTR = styled.tr`
    height: 150px;
    padding: 0;
    margin: 0;
`
export const TableDes  = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
    text-align: center;
    &.title {
        max-width: 218px;
        margin:0 auto;
    }
`
export const TitleTable = styled.p`
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

`
export const DesTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #000000;

    opacity: 0.5;
`
//  secont table

export const SecontTable  = styled.table`
    height: 45px;
     width: 1487px;
     border-collapse: collapse;
     margin:0 auto;
    margin-bottom: 220px;
    @media(max-width:425px){
        display:none;
    }

`