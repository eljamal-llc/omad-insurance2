import styled from "styled-components";

export const MtplAdventagesBlock = styled.div`
  display: flex;
  justify-cntent: center;
  width: 100%;
  max-width: 1600px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const MtplAdventagesHeading = styled.h2`
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin-top: 120px;
`;
export const MtplAdventagesCard = styled.div`
  background: #0d4656;
  padding: 40px 50px;
  margin: 40px;
  width: 714px;
`;
export const MtplAdventagesCardHeading = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`;
export const MtplAdventagesCardText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;

  &::before {
    content: "-----";
    // border: 2px solid #FFFFFF;
  }
`;
