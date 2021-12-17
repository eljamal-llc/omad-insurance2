import styled from "styled-components";

export const Wrapper = styled.div`
  .body-top {
    display: flex;
    flex-wrap: wrap;
    &__item {
      display: flex;
      max-width: 50%;
      width: 100%;
    }
    &__number {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 96px;
      line-height: 112px;
      color: #f1f1f1;
      background-color: #f0803d;
      width: 100px;
      height: 100px;
      max-width: 15%;
      position: relative;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      margin-right: 20px;
    }
    &__text {
      max-width: 85%;
    }
    &__name {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
      margin: 0;
      margin-bottom: 20px;
    }
    &__content {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
      margin: 0;
    }
  }
`;
