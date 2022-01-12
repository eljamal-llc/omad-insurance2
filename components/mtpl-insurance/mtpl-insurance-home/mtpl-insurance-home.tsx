import { FC } from "react";
import {
  HomeBg,
  HomeBgItem,
  HomeHeading,
  HomeText,
  HomeBlock,
  CardServiceBlock,
  CardServiceHeading,
  CardServiceText,
  CardService,
  HomeImg,
} from "./mtpl-insurance-home.e";
import { MtplInsuranceHomeProps } from "./mtpl-insurance-home.t";
import Image from "next/image";
import HomeIMg from "../../../assets/images/yur-page/singl-yur-img/home-bg-1.png";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
const MtplInsuranceHome: FC<MtplInsuranceHomeProps> = ({
  title,
  description,
  image,
}) => {
  const { t } = useTranslation();
  return (
    <HomeBg>
      <HomeBlock>
        <HomeBgItem>
          <BreadcrumbsBlock url2={'/page-persons?id=7'} url3={'mtpl-insurance?id=2'} link1="Главная" link2="АВТОСТРАХОВАНИЕ" link3="СТРАХОВАНИЕ ОСАГО" />
          <HomeHeading>
            {title || "Ответственность товаропроизводителя"}
          </HomeHeading>
          <HomeText>
            {description ||
              "Страхование без осмотра автомобиля и похода в офис. Скидки (КБМ) на ОСАГО за безаварийную езду"}
          </HomeText>
          <CardService>
            <CardServiceBlock>
              <CardServiceHeading>
                {t("common:Fastconvenient")}{" "}
              </CardServiceHeading>
              <CardServiceText>
                {t("common:Calculate_and_pay_3_minutes")}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{t("common:any_region")}</CardServiceHeading>
              <CardServiceText>
                {t("common:Insurance_payments_days")}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{t("common:Help__24")}</CardServiceHeading>
              <CardServiceText>
                {t("common:Live_chat_and_phone_support")}
              </CardServiceText>
            </CardServiceBlock>
          </CardService>
        </HomeBgItem>
        <HomeImg>
          {/* <Image src={HomeIMg} alt="test" /> */}
          <img src={image} alt={title} />
        </HomeImg>
      </HomeBlock>
    </HomeBg>
  );
};
export default MtplInsuranceHome;
