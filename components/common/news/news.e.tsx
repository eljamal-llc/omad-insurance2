import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  .container {
    position: relative;
  }
  .news-image {
    position: absolute;
    top: 0;
    left: 0;
    span {
      height: 100% !important;
      width: 100%;
    }
    img {
      object-fit: cover;
      object-position: center;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .slider-description {
    width: 100%;
    height: 308px;
    max-height: 355px;
    max-width: 1095px;
    height: 100%;
    background: #0d4656;
    position: absolute;
    left: 0;
    bottom: 40px;
    z-index: 5;
    padding: 40px 50px;
    .news-date {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      align-items: flex-end;
      transform: translateY(40px);
      .month {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: #ffffff;
        span {
          font-size: 72px;
          color: #f0803d;
          display: inline-block;
          margin-right: 20px;
        }
      }
      .year {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #ffffff;
        padding-right: 170px;
      }
    }
    &__row {
    }
    &-item {
      max-width: 840px;
      width: 100%;
      padding-top: 45px;
    }

    &__title {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;
      color: #ffffff;
      margin: 0;
      margin-bottom: 20px;
    }
    &__content {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
      margin: 0;
    }
    &__line {
      position: absolute;
      top: 0;
      right: 15%;
      height: 100%;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.5);
      .line {
        position: absolute;
        bottom: 0;
        height: 0;
        background-color: #fff;
        width: 1px;
        transition: height 4.5s ease-out;
        /* animation: mymove 2s infinite; */
        /* animation-delay: 3s; */
      }
      @keyframes mymove {
        from {
          height: 0;
        }
        to {
          height: 100%;
        }
      }
    }
    &__line.active {
      .line {
        height: 100%;
      }
    }
    &__buttons {
      text-align: right;
      padding-top: 25px;
      max-width: 50px;
      width: 100%;
      /* transform: translateX(-150%); */
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
    }
    .swiper-pagination {
      text-align: center;
      width: auto;
      left: auto;
      right: 5px;
      bottom: 0px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: #ffffff;
    }
  }
`;
export const HeroTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin: 0;
  padding-left: 50px;
  display: inline-block;
  position: relative;
  z-index: 5;
  padding-top: 40px;
  padding-left: 0;
`;

export const SliderDescriptionBtn = styled.button`
  border: 2px solid #fff;
  height: 50px;
  width: 50px;
  background-color: transparent;
  transition: border-color 0.3s ease-out;

  .arrow-top {
    background-color: #0d4656;
    transform: translateY(-60%);
  }
  .arrow-bottom {
    transform: rotate(-180deg) translateY(-60%);
    background-color: #0d4656;
  }
  &:first-child {
    margin-bottom: 20px;
  }
  &:hover {
    border-color: #f0803d;
    cursor: pointer;
  }
`;

export const SliderImg = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
