import { FC } from "react";
import { HeroBgProps } from "./hero-bg.t";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "./hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";

import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
const HeroBg: FC = () => {
  return (
    <ContainerHero imgUrl="./bg-avto-str.png">
      <GWrapper>
        <HeroBgItem>
          <BreadcrumbsBlock />
          <PageHeading>АВТОСТРАХОВАНИЕ</PageHeading>
          <PageText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque
            ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis
            mauris sed vitae tellus tempor, tortor.{" "}
          </PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
  );
};

export default HeroBg;
