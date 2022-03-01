import { FC, useMemo, useState } from "react";
import { GWrapper } from "../../../styles/global-styles.e";
import { MtplAdventagesProps } from "./mtpl-advantages.t";
import parse from "html-react-parser";
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
  CardImage,
  Arrow1,
  ERBg,
  AS,
} from "./mtpl-advantages.e";
import NoutImg from "../../../assets/images/yur-page/singl-yur-img/nout.png";
import CarImg from "../../../assets/images/yur-page/singl-yur-img/car.png";
import Strelka from "/strlka.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Casco, Health, Property } from "../..";
import { useRouter } from "next/router";
const MtplAdventages: FC<MtplAdventagesProps> = ({
  dataAdvantage,
  dataCardImage,
  dataCards,
  dataSteps,
  forms,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;  
  const typePolis = Object.values(router.query).toString();
  const yur = true;
  const fiz = false;
  return (
    // <GWrapper>
    <ERBg>
      {dataAdvantage?.status !== 0 && (
        <ERBg>
          <MtplAdventagesHeading>{dataAdvantage.title}</MtplAdventagesHeading>
          <MtplAdventagesBlock>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(dataAdvantage.title_1 || '')}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(dataAdvantage.text_1 || '')}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(dataAdvantage.title_2 || '')}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(dataAdvantage.text_2 || '')}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(dataAdvantage.title_3 || '')}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(dataAdvantage.text_3 || '')}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(dataAdvantage.title_4 || '')}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(dataAdvantage.text_4 || '')}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
          </MtplAdventagesBlock>
        </ERBg>
      )}
      {dataCardImage?.status !== 0 && (
        <ERBg>
          <MtplAdventagesHeading>{dataCardImage.title}</MtplAdventagesHeading>
          <MtplAdventagesInsurance>
            <div>
              {/* <MtplAdventagesInsuranceHeading>
                {t("common:Online_as_much")}
              </MtplAdventagesInsuranceHeading> */}
              <MtplAdventagesInsuranceText>
                {parse(dataCardImage.card_1.text_1 || '')}
              </MtplAdventagesInsuranceText>
              {/* <MtplAdventagesInsuranceHeading>
                {t("common:Online_as_much" || '')}
              </MtplAdventagesInsuranceHeading> */}
              <MtplAdventagesInsuranceText>
                {parse(dataCardImage.card_1.text_2 || '')}
              </MtplAdventagesInsuranceText>
            </div>
            {/* <Image src={NoutImg} alt="images" /> */}
            <CardImage>
              <img src={dataCardImage.card_1.image} alt={dataCardImage.title} />
            </CardImage>
          </MtplAdventagesInsurance>
          <MtplAdventagesInsuranceTwo>
            {/* <Image src={CarImg} alt="images" /> */}
            <CardImage>
              {/* <img src={second_image} alt={three_text} /> */}
              <img src={dataCardImage.card_2.image} alt={dataCardImage.title} />
            </CardImage>
            <div>
              {/* <MtplAdventagesInsuranceHeading>
                {t("common:Online_as_much" || '')}
              </MtplAdventagesInsuranceHeading> */}
              <MtplAdventagesInsuranceText>
                {parse(dataCardImage.card_2.text_1 || '')}
              </MtplAdventagesInsuranceText>
              {/* <MtplAdventagesInsuranceHeading>
                {t("common:Online_as_much" || '')}
              </MtplAdventagesInsuranceHeading> */}
              <MtplAdventagesInsuranceText>
                {parse(dataCardImage.card_2.text_2 || '')}
              </MtplAdventagesInsuranceText>
            </div>
          </MtplAdventagesInsuranceTwo>
        </ERBg>
      )}
      {dataCards?.status !== 0 && (
        <>
          <MtplAdventagesHeading>{dataCards.title}</MtplAdventagesHeading>
          <MtplAdventagesBlock>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {dataCards.card_1.title}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(dataCards.card_1.text_1 || '')}
              </MtplAdventagesCardText>
              <MtplAdventagesCardText>
                {parse(dataCards.card_1.text_2 || '')}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {dataCards.card_2.title}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(dataCards.card_2.text_1 || '')}
              </MtplAdventagesCardText>
              <MtplAdventagesCardText>
                {parse(dataCards.card_2.text_2 || '')}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
          </MtplAdventagesBlock>
        </>
      )}
      {dataSteps?.status !== 0 && (
        <ERBg>
          <MtplAdventagesHeading>{dataSteps.title}</MtplAdventagesHeading>
          <MtplAdventagesBlock>
            <NumberB>
              <MtplAdventagesNubmer>
                <NumText>1</NumText>
              </MtplAdventagesNubmer>
              <MtplAdventagesInsuranceText>
                {dataSteps.step_1}
              </MtplAdventagesInsuranceText>
            </NumberB>
            <ImgBlock>
              {/* <Image src={Strelka} alt="str" /> */}
              <Arrow1>
                <div></div>
              </Arrow1>
            </ImgBlock>
            <NumberB>
              <MtplAdventagesNubmer>
                <NumText>2</NumText>
              </MtplAdventagesNubmer>
              <MtplAdventagesInsuranceText>
                {dataSteps.step_2}
              </MtplAdventagesInsuranceText>
            </NumberB>
            <ImgBlock>
              <Arrow1>
                <div></div>
              </Arrow1>
              {/* <Image src={Strelka} alt="str2" /> */}
            </ImgBlock>
            <NumberB>
              <MtplAdventagesNubmer>
                <NumText>3</NumText>
              </MtplAdventagesNubmer>
              <MtplAdventagesInsuranceText>
                {dataSteps.step_3}
              </MtplAdventagesInsuranceText>
            </NumberB>
          </MtplAdventagesBlock>
          <AS>
            {forms.type == "health" ? (
              //@ts-ignore
              <Health
                yurFace={forms.cat == "yur" ? yur : fiz}
                title={forms.title}
              />
            ) : (
              ""
            )}
            {forms.type == "avto" ? (
              //@ts-ignore
              <Casco
                yurFace={forms.cat == "yur" ? yur : fiz}
                title={forms.title}
              />
            ) : (
              ""
            )}

            {forms.type == "estates" ? (
              //@ts-ignore
              <Property
                yurFace={forms.cat == "yur" ? yur : fiz}
                title={forms.title}
              />
            ) : (
              ""
            )}
          </AS>
        </ERBg>
      )}
    </ERBg>

    // </GWrapper>
  );
};
export default MtplAdventages;
