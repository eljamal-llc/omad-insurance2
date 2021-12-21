import styled from "styled-components";

export const  MtplAdventagesBlock = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    max-width:81%;
    flex-wrap:wrap;
    margin:0 auto ;
    @media(max-width:425px  ){
        width: 100%;
        max-width: 100%;
        margin: 2.5px 0;
        padding: 0;
    
    }



`

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
    background: #0D4656;
    padding:40px 50px ;
    margin:20px 20px ;
    width: 714px;
    @media (max-width:425px){
        padding: 20px 15px ;
        margin: 2.5px 16px;

    }
`
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
        content:'-----';
        // border: 2px solid #FFFFFF;
    }

`

export const MtplAdventagesInsurance = styled.div`
    display:flex;
    max-width:75%;
    align-items:center;
    width:100%;
    margin: 30px  auto;
        @media(max-width:1024px){
            flex-direction: column-reverse;
           
            
        }
      
`
export const MtplAdventagesInsuranceTwo = styled.div`
    display:flex;
    max-width:75%;
    align-items:center;
    width:100%;
    margin: 30px  auto;
        @media(max-width:1024px){
            flex-direction: column;
           
            
        }
`

export const MtplAdventagesInsuranceHeading = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    padding:0 0 0 20px;

    color: #000000;
`
export const MtplAdventagesInsuranceText = styled.p`
    padding:0 0 0 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    max-width:500px;
    color: #000000;
`

export const MtplAdventagesNubmer = styled.div`
    background: #0D4656;;
    width:120px;
    margin:0 auto;
 `
export const NumText = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    /* identical to box height */
    margin:0;
    padding:0;

    color: #FFFFFF;
    `
    export const NumberB = styled.div`
        text-align:center;
        width:300px;
`

export const ImgBlock = styled.div`
    margin-top: 50px;
    width: 319px;
`
