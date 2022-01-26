import { PartnersProps } from "./partners.t";
import { FC, useState } from "react";
import type { NextPage } from "next";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import {
  MissionBody,
  MissionContent,
  MissionNav,
  MissionNavItem,
} from "../mission/Mission.e";
import { SectionTitle, MainBtn, AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import {
  FinancialYears,
  FinancialBlock,
  FinancialBlockTitle,
  FinicialBloclContent,
  DownloadBlock,
  FinicialP,
  DwBtnBlock,
  DwBlockBorder,
} from "../financial-performance/financial-performance.e";
import Image from "next/image";

import { SponsrBlock, SponsorTitle, SponsorTitleItem } from "./partners.e";
import {
  RulesSearch,
  Slogan,
  Pravila,
  InfoDoc,
  InfoDocItem,
  BlockDocs,
  Suk,
} from ".././Insurance-rules/Insurance-rules.e";
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";

const main_image = "/slider1.jpg";
const PDFImage = "/carbon_document-pdf.png";

const Partners: FC<PartnersProps> = ({
  title,
  description,
  data,
  sidebars,
}) => {
  const [active, setActive] = useState("active");

  const HandlAct = () => {
    setActive("active");
  };
  const HandlPrivate = () => {
    setActive("active2");
  };
  const { t } = useTranslation();
  return (
    <>
      <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{title}</PageHeading>
            <PageText>{description}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          <div>
            <SponsrBlock>
              <div>
                <Image src={"/sp.png"} width={200} height={200} />
              </div>
              <div>
                <SponsorTitle>
                  Russian Automotive Marker Research <br /> (НАПИ)
                </SponsorTitle>
                <SponsorTitleItem>
                  Аналитическое автомобильное агентство (с 1995г) представляет
                  новый продукт: КАЛЬКУЛЯТОР СТОИМОСТИ ВЛАДЕНИЯ АВТОМОБИЛЕЙ
                  (ТСО) по легковым автомобилям, грузовым автомобилям, LCV:
                  https://dv-tco.ru/ <br />
                  <br />
                  Стоимость владения - сумма расходов на эксплуатацию автомобиля
                  и потери стоимости автомобиля за период владения.
                  <br />
                  <br />
                  Стоимость владения рассчитывается на конкретную модель
                  автомобиля. Размер расходов на автомобиль зависит от
                  технических характеристик автомобиля, региона регистрации
                  владельца автомобиля и др.
                </SponsorTitleItem>
              </div>
            </SponsrBlock>
            <SponsrBlock>
              <div>
                <Image src={"/mkb.png"} width={200} height={200} />
              </div>
              <div>
                <SponsorTitle>МКБ </SponsorTitle>
                <SponsorTitleItem>
                  ПАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК» работает на российском рынке
                  банковских услуг с 1992 года. Банк предоставляет полный
                  перечень услуг для корпоративных клиентов и для частных лиц,
                  предлагая универсальные продукты и услуги для широкой
                  аудитории, а также разрабатывая специальные программы с учетом
                  индивидуальных потребностей и пожеланий Клиентов.
                </SponsorTitleItem>
              </div>
            </SponsrBlock>
            <SponsrBlock>
              <div>
                <Image src={"/mkb.png"} width={200} height={200} />
              </div>
              <div>
                <SponsorTitle>МКБ </SponsorTitle>
                <SponsorTitleItem>
                  ПАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК» работает на российском рынке
                  банковских услуг с 1992 года. Банк предоставляет полный
                  перечень услуг для корпоративных клиентов и для частных лиц,
                  предлагая универсальные продукты и услуги для широкой
                  аудитории, а также разрабатывая специальные программы с учетом
                  индивидуальных потребностей и пожеланий Клиентов.
                </SponsorTitleItem>
              </div>
            </SponsrBlock>
            <SponsrBlock>
              <div>
                <Image src={"/mkb.png"} width={200} height={200} />
              </div>
              <div>
                <SponsorTitle>МКБ </SponsorTitle>
                <SponsorTitleItem>
                  ПАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК» работает на российском рынке
                  банковских услуг с 1992 года. Банк предоставляет полный
                  перечень услуг для корпоративных клиентов и для частных лиц,
                  предлагая универсальные продукты и услуги для широкой
                  аудитории, а также разрабатывая специальные программы с учетом
                  индивидуальных потребностей и пожеланий Клиентов.
                </SponsorTitleItem>
              </div>
            </SponsrBlock>
          </div>

          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default Partners;
