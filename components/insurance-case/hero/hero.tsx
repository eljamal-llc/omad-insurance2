import { FC } from "react";
import Image from "next/image";
import { HeroProps } from "./hero.t";
import { GWrapper } from "../../../styles/global-styles.e";
import {  Title, Wrapper } from "./hero.e";

import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const HeroCase: FC<HeroProps> = () => {
  function handleClick(event: any) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Wrapper>
      <GWrapper>
        <BreadcrumbsBlock/>
        <Title>МАГАЗИН ПОЛИСОВ</Title>
      </GWrapper>
    </Wrapper>
  );
};

export default HeroCase;
