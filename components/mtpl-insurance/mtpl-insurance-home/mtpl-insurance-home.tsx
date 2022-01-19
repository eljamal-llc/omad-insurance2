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
const MtplInsuranceHome: FC<MtplInsuranceHomeProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <HomeBg>
      <HomeBlock>
        <HomeBgItem>
          <HomeHeading>
            {data.data.title || "Ответственность товаропроизводителя"}
          </HomeHeading>
          <HomeText>
            {data.data.description ||
              "Страхование без осмотра автомобиля и похода в офис. Скидки (КБМ) на ОСАГО за безаварийную езду"}
          </HomeText>
          <CardService>
            <CardServiceBlock>
              <CardServiceHeading>
                {data.data.privilege?.title_1}
              </CardServiceHeading>
              <CardServiceText>
                {data.data.privilege?.description_1}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>
                {data.data.privilege?.title_2}
              </CardServiceHeading>
              <CardServiceText>
                {data.data.privilege?.description_2}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>
                {data.data.privilege?.title_3}
              </CardServiceHeading>
              <CardServiceText>
                {data.data.privilege?.description_3}
              </CardServiceText>
            </CardServiceBlock>
          </CardService>
        </HomeBgItem>
        <HomeImg>
          {/* <Image src={HomeIMg} alt="test" /> */}
          <img src={data.data.image} alt={data.data.title} />
        </HomeImg>
      </HomeBlock>
    </HomeBg>
  );
};
export default MtplInsuranceHome;
