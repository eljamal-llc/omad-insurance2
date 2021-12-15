import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { HeroProps } from "./hero.t";
import { GWrapper } from "../../../styles/global-styles.e";
import { BreadCrumbs, Title, Wrapper } from "./hero.e";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const HeroCase: FC<HeroProps> = () => {
  function handleClick(event: any) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Wrapper>
      <GWrapper>
        <BreadCrumbs>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link
                underline="hover"
                key="1"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                Главная
              </Link>

              {/* <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
              >
                Магазин полисов
              </Link> */}

              <Typography key="3" color="text.primary">
                Магазин полисов
              </Typography>
            </Breadcrumbs>
          </Stack>
        </BreadCrumbs>
        <Title>МАГАЗИН ПОЛИСОВ</Title>
      </GWrapper>
    </Wrapper>
  );
};

export default HeroCase;
