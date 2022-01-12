import { FC } from "react";
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
const WantInsure: FC<WantInsureProps> = ({ onlineInsure, setOnlineInsure }) => {
  const { t } = useTranslation();

  const ArrowIcon = (props: any) => (
    
    <svg width="47"
         height="16" 
         viewBox="0 0 47 16" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
        className={`btn ${props.class}`}
      >
    <path 
      d="M1 7L8.74228e-08 7L-8.74228e-08 9L1 9L1 7ZM46.7071 8.70711C47.0976 8.31659 47.0976 7.68342 46.7071 7.2929L40.3431 0.928936C39.9526 0.538411 39.3195 0.538411 38.9289 0.928936C38.5384 1.31946 38.5384 1.95262 38.9289 2.34315L44.5858 8L38.9289 13.6569C38.5384 14.0474 38.5384 14.6805 38.9289 15.0711C39.3195 15.4616 39.9526 15.4616 40.3431 15.0711L46.7071 8.70711ZM1 9L46 9L46 7L1 7L1 9Z" 
      fill={props.fill}/>
    </svg>
  );

  const handlePrivate = () => {
    setOnlineInsure("1");
  };
  const handlePublic = () => {
    setOnlineInsure("2");
  };
  return (
    <Wrapper>
      {/* <GWrapper className="container"> */}
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
            <Image src={Ramka}  alt='dd'/>
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
          <Image src={Ramka}  alt='dd'/>

            <ArrowIcon fill="#F0803D" class={"arrow-left"} />
          </InsureBtn>
        </InsureIndividualsBlockYur>
      </InsureRow>
      {/* </GWrapper> */}
    </Wrapper>
  );
};

export default WantInsure;
