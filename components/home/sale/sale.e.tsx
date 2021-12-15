import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  padding: 100px 0 50px;
  .swiper {
    width: 100%;
    height: 100%;
  }
`;
export const SaleTitle = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 50px;
  position: relative;
  z-index: 5;
`;
export const SaleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
`;
export const VerticalSlider = styled.div`
  max-width: 20%;
  width: 100%;
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide {
    width: 200px;
    /* height: 40px !important;
    */
    transition: all 200ms linear;

    span {
      width: 100% !important;
      height: 100% !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &::before {
      position: absolute;
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      background-color: #f0803d;
      top: -20px;
      left: 0;
    }
    &::after {
      position: absolute;
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      background-color: #f0803d;
      bottom: -20px;
      left: 0;
    }
  }
  .swiper-slide-thumb-active {
    width: 300px;
    height: 150px !important;
    &::before {
      height: 2px;
    }
    &::after {
      height: 2px;
    }
  }
  /* .swiper-slide-prev,
  .swiper-slide-next {
    width: 250px;
    height: 80px !important;
  } */
`;
export const HorizontalSlider = styled.div`
  max-width: 80%;
  width: 100%;
  transform: translateY(-100px);
  z-index: 1;
`;
export const HorizontalSliderRow = styled.div`
  display: flex;
`;
export const HorizontalSliderLeft = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 80px 50px;
  position: relative;
`;
export const HorizontalSliderRight = styled.div`
  max-width: 50%;
  width: 100%;
`;
export const HorizontalSliderTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;
  margin-bottom: 40px;
`;
export const HorizontalSliderDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 0;
`;
export const HorizontalSliderButton = styled.div`
  position: absolute;
  bottom: 20%;
  right: 50px;
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
    border: 2px solid #0d4656;
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
export const HorizontalSliderImage = styled.div`
  height: 798px;
  span {
    height: 100% !important;
  }
  .img {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
