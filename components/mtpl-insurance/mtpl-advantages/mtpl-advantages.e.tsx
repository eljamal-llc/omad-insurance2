import styled from "styled-components";

export const MtplAdventagesBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 425px) {
    width: 100%;
    max-width: 100%;
    margin: 2.5px 0;
    padding: 0;
  }
`;

export const MtplAdventagesHeading = styled.h2`
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin-top: 120px;
  @media (max-width: 425px) {
    font-size: 16px;
    text-align: left;
    line-height: 16px;
    padding: 0 39px;
    width: 320px;
  }
`;
export const MtplAdventagesCard = styled.div`
  background: #0d4656;
  padding: 27px 34px;
  width: 714px;
  margin: 20px 20px;
  /* width: 714px; */
  @media (max-width: 425px) {
    width: 400px;
    padding: 20px 15px;
    margin: 2.5px 16px;
  }
  @media (max-width: 375px) {
    margin: 0 auto;
    width: 300px;
  }
`;
export const MtplAdventagesCardHeading = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  @media (max-width: 425px) {
    font-size: 14px;
    width: 340px;
  }
`;
export const MtplAdventagesCardText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;

  &::before {
    /* content: "";
    padding: 1px;
    flex-direction: column;
    width: 20px;
    background-color: #fff;
    display: flex;
    align-items: center; */
    // border: 2px solid #FFFFFF;
  }
  @media (max-width: 425px) {
    font-size: 13px;
  }
`;

export const MtplAdventagesInsurance = styled.div`
  display: flex;
  max-width: 75%;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
export const CardImage = styled.div`
  width: 900px;
  height: 300px;
  padding-left: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const MtplAdventagesInsuranceTwo = styled.div`
  display: flex;
  max-width: 75%;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const MtplAdventagesInsuranceHeading = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  padding: 0 0 0 20px;

  color: #000000;
`;
export const MtplAdventagesInsuranceText = styled.p`
  padding: 0 0 0 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  max-width: 500px;
  color: #000000;
`;

export const MtplAdventagesNubmer = styled.div`
  background: #0d4656;
  width: 120px;
  margin: 0 auto;
`;
export const NumText = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  /* identical to box height */
  margin: 0;
  padding: 0;

  color: #ffffff;
`;
export const NumberB = styled.div`
  text-align: center;
  width: 300px;
  @media (max-width: 768px) {
    margin: 100px auto 0;
  }
`;
export const ImgBlock = styled.div`
  margin-top: 50px;
  width: 319px;
  @media (max-width: 1440px) {
    width: 130px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    position: relative;
    display: block;
    left: 322px;
    transform: rotate(90deg);
  }
  @media (max-width: 425px) {
    left: 150px;
  }
  @media (max-width: 375px) {
    left: 125px;
  }
  @media (max-width: 320px) {
    left: 110px;
  }
`;
