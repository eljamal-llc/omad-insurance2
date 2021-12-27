import { FC } from "react";

import { HeroBgProps } from "./hero-bg.t";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "./hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";

import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
const HeroBg: FC<HeroBgProps> = ({ data }) => {
  const { title, main_image, description } = data[0];
  // console.log("inner ->>>>", data[0]);

  return (
    <ContainerHero imgUrl={main_image}>
      <GWrapper>
        <HeroBgItem>
          <BreadcrumbsBlock />
          <PageHeading>{title}</PageHeading>
          <PageText>{description}</PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
  );
};

export default HeroBg;
