import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f1f1f1;
  backdrop-filter: blur(10px);
  height: 100vh;
  padding-top: 10%;
  .panel {
    padding: 40px 50px;
  }
`;
export const AuthBlock = styled.div`
  max-width: 690px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  .tabs {
    .MuiTabs-indicator {
      display: none;
    }
  }
  .tab-item {
    width: 50%;
    background: #0d4656;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff !important;
    padding: 25px 0;
    transition: all 0.4s ease-out;
    text-transform: capitalize;
    &.Mui-selected {
      background: #f0803d;
    }
  }
`;
export const FormCheck = styled.span`
  display: block;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  .label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  a {
    text-decoration: underline;
  }
`;
export const AuthButton = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  background-color: #0d4656;
  border: 0;
  width: 100%;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
`;
export const AuthLink = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  display: block;
  text-align: center;
  margin-bottom: 40px;
  transition: all 0.3s ease-out;
  &:hover {
    color: #f0803d;
  }
`;
