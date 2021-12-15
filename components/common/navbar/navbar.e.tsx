import styled from "styled-components";
import { Link } from "@mui/material";
export const Wrapper = styled.div`
  /* background-color: #0d4656; */
  padding: 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .navbar-user {
    max-width: 44px;
    width: 100%;
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
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1120px) {
    font-size: 14px;
    line-height: 100%;
    padding: 10px 15px;
    margin-right: 5%;
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
  &:hover {
    cursor: pointer;
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
