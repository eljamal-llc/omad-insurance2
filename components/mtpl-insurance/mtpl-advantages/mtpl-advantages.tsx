import { FC } from "react";
import { GWrapper } from "../../../styles/global-styles.e";
import { MtplAdventagesProps } from "./mtpl-advantages.t";

import {
  MtplAdventagesHeading,
  MtplAdventagesBlock,
  MtplAdventagesCard,
  MtplAdventagesCardHeading,
  MtplAdventagesCardText,
  MtplAdventagesInsurance,
  MtplAdventagesInsuranceHeading,
  MtplAdventagesInsuranceText,
  MtplAdventagesNubmer,
  NumText,
  NumberB,
  ImgBlock,
  MtplAdventagesInsuranceTwo,
} from "./mtpl-advantages.e";
import NoutImg from "../../../assets/images/yur-page/singl-yur-img/nout.png";
import CarImg from "../../../assets/images/yur-page/singl-yur-img/car.png";
// import Strelka from "../../../assets/images/yur-page/singl-yur-img/strlka.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MtplAdventages: FC<MtplAdventagesProps> = () => {
  const {t} = useTranslation()
  return (
    // <GWrapper>
    <>
      <MtplAdventagesHeading>
        {t('common:Benefits_of_OSAGO_insurance')}
      </MtplAdventagesHeading>
      <MtplAdventagesBlock>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
          {t('common:Benefits_of_OSAGO_insurance')}
          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')}
            {t('common:Fastconvenient')}
          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')} 
          {t('common:Fastconvenient')}

          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')} 
          {t('common:Fastconvenient')}

          </MtplAdventagesCardText>
        </MtplAdventagesCard> 
      </MtplAdventagesBlock>
      <MtplAdventagesHeading>
      {t('common:Electronic_insurance')}
      </MtplAdventagesHeading>
      <MtplAdventagesInsurance>
        <div>
          <MtplAdventagesInsuranceHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesInsuranceHeading>
          <MtplAdventagesInsuranceText>
          ---{t('common:text-avtostrox')}
          </MtplAdventagesInsuranceText>
          <MtplAdventagesInsuranceHeading>
          {t('common:Online_as_much')} 
          </MtplAdventagesInsuranceHeading>
          <MtplAdventagesInsuranceText>
          ---{t('common:text-avtostrox')} 
          </MtplAdventagesInsuranceText>
        </div>
        <Image src={NoutImg} alt="images" />
      </MtplAdventagesInsurance>
      <MtplAdventagesInsuranceTwo>
        <Image src={CarImg} alt="images" />

        <div>
          <MtplAdventagesInsuranceHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesInsuranceHeading>
          <MtplAdventagesInsuranceText>
          ---{t('common:text-avtostrox')} 
          </MtplAdventagesInsuranceText>
          <MtplAdventagesInsuranceHeading>
          {t('common:Online_as_much')}
          </MtplAdventagesInsuranceHeading>
          <MtplAdventagesInsuranceText>
          ---{t('common:text-avtostrox')} 
          </MtplAdventagesInsuranceText>
        </div>
      </MtplAdventagesInsuranceTwo>
      <MtplAdventagesHeading>
      {t('common:nsurance_indemnity_for_OSAGO')} 
      </MtplAdventagesHeading>
      <MtplAdventagesBlock>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
          {t('common:Fastconvenient')}
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')}<br/>
            {t('common:Fastconvenient')} 

          </MtplAdventagesCardText>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')}<br/>
            {t('common:Fastconvenient')}

          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
          {t('common:Fastconvenient')}

          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')}<br/>
            {t('common:Fastconvenient')}

          </MtplAdventagesCardText>
          <MtplAdventagesCardText>
          {t('common:At_OMAD_main_processes')}<br/>
            {t('common:Fastconvenient')}

          </MtplAdventagesCardText>
        </MtplAdventagesCard>
      </MtplAdventagesBlock>
      <MtplAdventagesHeading>
      {t('common:Calculate_osago')}
      </MtplAdventagesHeading>
      <MtplAdventagesBlock>
        <NumberB>
          <MtplAdventagesNubmer>
            <NumText>1</NumText>
          </MtplAdventagesNubmer>
          <MtplAdventagesInsuranceText>
            
            {t('common:Calculate_osago')}

          </MtplAdventagesInsuranceText>
        </NumberB>
        <ImgBlock>
          {/* <Image src={Strelka} alt="str" />
           */}
          strelka
        </ImgBlock>
        <NumberB>
          <MtplAdventagesNubmer>
            <NumText>2</NumText>
          </MtplAdventagesNubmer>
          <MtplAdventagesInsuranceText>
            
            {t('common:Calculate_osago')}

          </MtplAdventagesInsuranceText>
        </NumberB>
        <ImgBlock>
          {/* <Image src={Strelka} alt="str" /> */}
          strelka
        </ImgBlock>
        <NumberB>
          <MtplAdventagesNubmer>
            <NumText>3</NumText>
          </MtplAdventagesNubmer>
          <MtplAdventagesInsuranceText>
            
            {t('common:Calculate_osago')}

          </MtplAdventagesInsuranceText>
        </NumberB>
      </MtplAdventagesBlock>
    </>

    // </GWrapper>
  );
};
export default MtplAdventages;
