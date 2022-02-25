import { FC, useEffect, useState } from "react";
import { WantInsureProps } from "./want-insure.t";
import {
  InsureBtn,
  InsureIndividualsBlock,
  InsureRow,
  InsureTitle,
  InsureTitleBlock,
  PersonDescription,
  PersonTitle,
  Wrapper,
  InsureIndividualsBlockYur,
} from "./want-insure.e";
import { useTranslation } from "next-i18next";
import  Image  from "next/image";
import Ramka from '../../../assets/images/pravki_ru.png'
import { api } from "../../../services/api";
import { MultiSlider } from "../..";
import { ISliderData } from "../../common/multi-slider/multi-slider.t";
import ArrowIcon from "../../svg/ArrowIcon";

const WantInsure: FC<WantInsureProps> = () => {
  const { t } = useTranslation();

  const [onlineInsure, setOnlineInsure] = useState("1");
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  
  useEffect(() => {
    api.get("category-insurance", { params: { type: onlineInsure } })
      .then(async (response) => {
          await setSliderData(response.data.data);
    });
  }, [onlineInsure]);
  
  const handlePrivate = () => {
    setOnlineInsure("1");
  };
  const handlePublic = () => {
    setOnlineInsure("2");
  };


  return (
    <>
    <Wrapper>

      <InsureRow>
        <InsureTitleBlock>
          <InsureTitle>{t("common:want_to_insure")}</InsureTitle>
        </InsureTitleBlock>

        <InsureIndividualsBlock className={onlineInsure == "1" ? "active" : ""}>
          <PersonTitle>
            {t("common:home_card_title2_for_individuals")}
          </PersonTitle>
          <PersonDescription className="description">
            В числе наших конкурентных преимуществ – доскональное изучение интересов страхователя таким образом, чтобы оформление страхового договора не требовало существенных временных затрат.

          </PersonDescription>
          <InsureBtn onClick={handlePrivate}>
            <Image src={Ramka} alt='dd' />
            <ArrowIcon fill="#F0803D" class={"arrow-left"} />
          </InsureBtn>
        </InsureIndividualsBlock>
        <InsureIndividualsBlockYur
          className={onlineInsure == "2" ? "active" : ""}
        >
          <PersonTitle>
            {t("common:home_card_title3_Legal_entities")}
          </PersonTitle>
          <PersonDescription className="description">
            Корпоративное страхование — наиболее эффективный способ защиты финансовой стабильности предприятия и компенсации непрогнозируемых финансовых расходов
          </PersonDescription>
          <InsureBtn onClick={handlePublic}>
            <Image src={Ramka} alt='dd' />

            <ArrowIcon fill="#F0803D" class={"arrow-left"} />
          </InsureBtn>
        </InsureIndividualsBlockYur>
      </InsureRow>
      {/* </GWrapper> */}
    </Wrapper>
    
    <MultiSlider data={sliderData} /></>
  );
};

export default WantInsure;
