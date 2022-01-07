import { FC } from "react";
import Card from "./card/card";
import { CardsRow, Wrapper } from "./cards.e";
import { useTranslation } from "react-i18next";
export interface CardsProps {}
const Cards: FC<CardsProps> = () => {
  const {t} = useTranslation()
  return (
    <Wrapper>
      <CardsRow>
        <Card CardLink1={t('common:Mission')}
              CardLink2={t('common:Values')} 
              CardLink3={t('common:Social_responsibility')}   
              CardLink1Nav='/about/mission'
              CardLink2Nav='/about/values'
              CardLink3Nav='/about/social'
              />
{/*  */}
        <Card CardLink1={t('common:Requisites')} 
              CardLink2={t('common:Security_policy')} 
              CardLink3={t('common:Financial_performance')}  
              CardLink1Nav='/about' 
              CardLink2Nav='/about'
              CardLink3Nav='/about/'
              />
              {/*  */}
        <Card CardLink1={t('common:Reinsurance')} 
              CardLink2={t('common:Types_insurance')} 
              CardLink3={t('common:Insurance_rules')}  
              CardLink1Nav='/about'
              CardLink2Nav='/about'
              CardLink3Nav='/about'
              
              />
        <Card CardLink1={t('common:Insurance_rules')}
              CardLink2={t('common:Insurance_rules')}
              CardLink3={t('common:Management_participants')}  
              CardLink1Nav='/mission'
              CardLink2Nav='/values'
              CardLink3Nav='/social'
              />
      </CardsRow>
    </Wrapper>
  );
};

export default Cards;
