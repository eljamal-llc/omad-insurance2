import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d4656;
  padding: 40px 50px;
  .swiper {
    width: 100%;
  }

  .section-title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
  }
`;
export const InnerWrapper = styled.div`
  max-width: 1270px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const SliderRow = styled.div`
  display: flex;
  align-items: center;
`;
export const SliderLeft = styled.div`
  width: 55%;
  padding-right: 5%;
  /* .swiper-slide {
    background-color: #0d4656;
  } */
`;
export const SliderRight = styled.div`
  width: 45%;
`;
export const SliderImage = styled.div`
  max-height: 680px;
  height: 680px;
  span {
    height: 100% !important;
    width: 100% !important;
  }
  img {
    object-fit: cover;
  }
`;

export const SliderTitle = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  margin-bottom: 20px;
`;
export const SliderDescription = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;
export const SliderButton = styled.div`
  position: absolute;
  bottom: 20%;
  right: 50px;
  /* position: relative; */
  max-width: 270px;
  width: 100%;
  span {
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    transition: all 0.4s ease-out;
  }

  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 10px 20px;
    display: inline-block;
    width: 50px;
    position: absolute;
    right: 0;
    transition: width 0.4s ease-out;
  }
  &:hover {
    a {
      width: 95%;
    }
    span {
      opacity: 1;
      visibility: visible;
    }
  }
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -50%;
    transition: all 0.4s ease-out;
    background-color: #e5e5e5;
  }
`;
