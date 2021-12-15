import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 75%;
  width: 100%;
  background-color: #e5e5e5;
  border-bottom: 1px solid #000;
`;
export const LeftWrapper = styled.div`
  padding: 40px 50px;
  @media (max-width: 1800px) {
    padding: 2% 2.5%;
  }
  .title {
    font-weight: 700;
  }
  border-bottom: 1px solid #000;
  &:last-child {
    border-bottom: none;
  }
  &.bottom-wrap {
    .description {
      padding-bottom: 40px;
    }
    .left-wrapper-row {
      justify-content: flex-start;
    }
    .icon {
      padding-right: 50px;
      &:first-child {
        border-right: 1px solid #000;
      }
      &:last-child {
        padding-left: 50px;
      }
    }
  }
`;
export const LeftWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LeftWrapperDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 0;
  margin-top: 20px;
`;
export const LeftWrapperPDF = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 515px;
  width: 100%;
  align-items: center;
`;
export const PDFIcon = styled.div`
  height: 100px;
  width: 100px;
  span {
    width: 100% !important;
    height: 100% !important;
  }
  img {
    object-fit: content;
  }
`;
export const PDFInfo = styled.div`
  max-width: 255px;
  width: 100%;
`;

export const PDFTitle = styled.h4`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 100%;
  color: #000000;
`;
export const PDFData = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.5);
`;
export const LeftButton = styled.div`
  text-align: right;
  margin-top: 35px;
`;
