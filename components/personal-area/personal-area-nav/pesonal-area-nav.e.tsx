import styled from "styled-components";


export const HeaderNavBody = styled.div`
    background-color: #0D4656;
    padding: 40px 50px ;
    box-sizing: border-box;

`
export const PersonalAreaNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1820px;
    margin: 0 auto;
    box-sizing: border-box;


`
export const PersonalAreaUserNav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin:0;
    color: #000000;
    box-sizing: border-box;

`
export const PersonalAreaUserNavLi = styled.li`
    padding: 30px 0;
    margin-right:50px;
    box-sizing: border-box;
    border-bottom:  2px  solid #fff;
        &:hover{
            border-bottom:  2px solid #F0803D;
        }
`
export const PersonalAreaSettings = styled.li`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    list-style: none;
    /* identical to box height */


    color: #000000;

`