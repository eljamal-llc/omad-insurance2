import { FC } from "react";

import { HeroBgProps } from "./hero-bg.t";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "./hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";

const HeroBg: FC<HeroBgProps> = ({ data }) => {
  // @ts-ignore
  const { name, bg_image, description } = data[0];

  return (
    <ContainerHero imgUrl={bg_image}>
      <GWrapper>
        <HeroBgItem>
          {/* */}
          <PageHeading>{name}</PageHeading>
          <PageText>{description}</PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
  );
};

export default HeroBg;
