import { FC } from "react";

import { HeroBgProps } from "./hero-bg.t";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "./hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import Img from '/bg-avto-str.png'
const HeroBgOf: FC<HeroBgProps> = ({  }) => {
  // @ts-ignor'e
const Img = '/bg-avto-str.png'
  return (
    <ContainerHero imgUrl={Img}>
      <GWrapper>
        <HeroBgItem>
          {/* */}
          <PageHeading>Акции и спецпредложения</PageHeading>
          <PageText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. </PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
  );
};

export default HeroBgOf;
