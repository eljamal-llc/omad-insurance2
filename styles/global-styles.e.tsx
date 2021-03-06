import styled from 'styled-components';

export const GWrapper = styled.div`
  max-width: 1820px;
  width: 100%;
  margin: 0 auto;
  padding: 0.1px;
  @media (max-width: 1800px) {
    max-width: 95%;
  }
`;
export const MWrapper = styled.div`
  max-width: 1478px;
  width: 100%;

  margin: 0 auto;
  @media (max-width: 1800px) {
    max-width: 95%;
  }
`;
export const Wrapper = styled.div`

  .bg-blue {
    background-color: #0d4656;
  }
`;

// export const GlobalStyles = styled.div`
//   padding: 0 100px;

//   @media (max-width: 1300px) {
//     padding: 0 70px;
//   }
//   @media (max-width: 1024px) {
//     padding: 0 30px !important;
//   }
//   @media (max-width: 700px) {
//     padding: 0 15px !important;
//   }
// `;
