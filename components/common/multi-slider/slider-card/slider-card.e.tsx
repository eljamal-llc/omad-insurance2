import styled from "styled-components";


export const Wrapper = styled.div`
  border-right: 2px solid #000;
  a {
    padding: 40px 50px;
    display: inline-block;
    text-decoration: none;
    position: relative;
    width: 100%;

    &::before {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #e5e5e5;
      width: 100%;
      height: 0%;
      opacity: 0.5;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      transform-origin: bottom;
      z-index: -1;
    }
    &:hover {
      &::before {
        height: 100%;
      }
    }
    @media (max-width: 1680px) {
      padding: 20px 30px;
    }
  }
`;
export const SliderTitle = styled.h4`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 20px;
  @media (max-width: 1800px) {
    font-size: calc(16px + 12 * (100vw / 1920));
    line-height: 110%;
  }
  @media (max-width: 1680px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export const SliderList = styled.ul`
  margin-bottom: 75px;
  @media (max-width: 1680px) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding-left: 18px;
    margin-bottom: 10px;
  }
`;

export const SliderListItem = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
  @media (max-width: 1800px) {
    font-size: calc(14px + 14 * (100vw / 1920));
    line-height: 110%;
  }
  @media (max-width: 1680px) {
    font-size: 16px;
  }
`;
export const SliderImg = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  span {
    height: 100% !important;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 1680px) {
    height: 190px;
  }
  @media (max-width: 768px) {
    height: 120px;
  }
`;
export const SliderLink = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  background-color: #0d4656;
  padding: 20px;
  display: inline-block;
  @media (max-width: 1800px) {
    font-size: calc(14px + 14 * (100vw / 1920));
    line-height: 110%;
  }
  @media (max-width: 1680px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const CardContent = styled.p`
  color: #000000;
  opacity: 0.5;
`