import styled from 'styled-components'

export const MissionBody = styled.div`
    background-color: #E5E5E5;
    padding: 50px 60px ;
    height: 200vh;
`   
export const MissionContent = styled.div`
     display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
`
export const MissionNav = styled.div`
    width: 480px;
    background: #ffff;
    padding: 40px 50px;
    border: 1px solid #000;
`
export  const MissionNavItem = styled.p`
    font-size: 24px;
    line-height: 28px;
    cursor: pointer;
    color: #000000;
    transition: 0.3s all linear;
    &:hover{
        color: #F0803D;;
    }
    
`

export const MissionContentTitle = styled.h2`
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #000000;

`
export const MissionContentAbout = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    max-width:948px;
    color: #000000;

`
export const MissionContentAbItem = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;    
    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        position: relative;
        height: 2px;
        background: #F0803D;
        bottom: 7px;
        right: 9px;
    }
`