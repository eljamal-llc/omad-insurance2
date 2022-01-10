import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #0d4656;
`;
export const WrapperRow = styled.div`
  display: flex;
`;
export const WrapperCategories = styled.div`
  max-width: 25%;
  width: 100%;
  border-right: 1px solid #fff;
`;
export const WrapperCategory = styled.div`
  padding: 30px 50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  &.active {
    background-color: #f0803d;
  }
  @media (max-width: 1800px) {
    padding: 7% 10%;
  }
`;
export const WrapperTags = styled.div`
  padding: 40px 50px;
  @media (max-width: 1800px) {
    padding: 3% 5%;
  }
`;
export const TagsTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background-color: #f0803d;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 2px solid #f0803d;
  display: inline-block;
`;
export const TagsRow = styled.div`
  display: flex;
`;
export const Tag = styled.div`
  display: inline-block;
  margin-right: 20px;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    padding: 10px 20px;
    border: 2px solid #f0803d;
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: #f0803d;
    }
  }
`;
