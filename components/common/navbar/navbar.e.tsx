import styled from "styled-components";
import { Link } from "@mui/material";
export const Wrapper = styled.div`
  /* background-color: #0d4656; */
  padding: 24px 0;
  position: relative;
  margin: -47px 0;
  top: 30px;
  left: 0;
  width: 100%;
  z-index: 100;
  .navbar-user {
    max-width: 44px;
    width: 100%;
  }
  &.active {
    background:  #0D4656;
  }
`;
export const NavbarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarLeft = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    /* justify-content: right; */
    .toremove {
      display: none;
    }
  }
`;
export const NavbarRight = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 306px;
  width: 100%;
  @media (max-width: 900px) {
    max-width: 240px;
  }
  @media (max-width: 768px) {
    justify-content: right;
    .toremove {
      display: none;
    }
  }
`;

export const NavbarLogo = styled.div`
  width: 208px;
  max-width: 208px;
  margin-right: 100px;
  position: relative;
  z-index: 50;
  @media (max-width: 1120px) {
    width: 100%;
    max-width: 110px;
    margin-right: 5%;
  }
`;
export const NavbarLink = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 22px;
  border: 1px solid #fff;
  display: inline-block;
  margin-right: 50px;
  transition: 0.3s all linear;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1120px) {
    font-size: 14px;
    line-height: 100%;
    padding: 10px 15px;
    margin-right: 5%;
  }
  &:hover {
    background:  #F0803D;
  }
`;

export const NavbarBtn = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 50;
  transition: 0.3s all linear;

  &:hover {
    cursor: pointer;
    background:  #F0803D;

  }
  svg {
    margin-left: 20px;
  }
  @media (max-width: 1120px) {
    font-size: 14px;
    line-height: 100%;
    padding: 4px 6px;
  }
`;
export const LangSwitchSelect = styled.select`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  background-color: #0000001b;
  border: 1px solid #ffffff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 50;
  &:hover {
    cursor: pointer;
  }
`
export const LangSwitch = styled.option`
 font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  background-color: #00000034;
  border: 1px solid #ffffff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 50;
  transition: 0.3s all linear;

  &:hover {
    cursor: pointer;

    background:  #F0803D;

  }
  &.active {
    background:  #F0803D;
  }
  svg {
    margin-left: 20px;
  }
  @media (max-width: 1120px) {
    font-size: 14px;
    line-height: 100%;
    padding: 4px 6px;
  }
`;

