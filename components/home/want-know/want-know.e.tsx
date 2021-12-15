import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d4656;
  position: relative;
`;
export const KnowTitle = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  transform: translateY(40px);
`;
export const KnowRow = styled.div`
  display: flex;
  justify-content: center;
`;
export const KnowList = styled.ul`
  list-style: none;
  padding: 100px 0 170px 50px;
  margin: 0;
  position: relative;

  &::before {
    display: block;
    content: "";
    height: 100%;
    width: 1px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }
  .box-out {
    height: 40px;
    width: 40px;
    border: 2px solid #f0803d;
    position: absolute;
    top: 110px;
    transition: all 0.3s ease-out;
    &.box2 {
      top: 200px;
    }
    &.box3 {
      top: 300px;
    }
    &.box4 {
      top: 400px;
    }
    &.box5 {
      top: 500px;
    }
  }
`;
export const KnowListItem = styled.li`
  margin-bottom: 40px;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease-out;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &.list-active {
    a {
      transform: translateX(65px);
    }
  }
`;
export const VerticalSlider = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: row;
  height: 710px;
  max-width: 20%;
  width: 100%;
  transform: translateY(-50%);

  .swiper-wrapper {
    align-items: flex-end;
  }
  .swiper-slide {
    width: 320px;
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
  }
  .swiper-slide-active {
    width: 430px;
  }
`;
