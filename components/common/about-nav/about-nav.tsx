import { FC } from "react";
import type { NextPage } from "next";
import { AboutNavProps } from "./about-nav.t";
import Link from "next/link";
import NextLink from "next/link";

import { MissionNav, MissionNavItem } from "../../about/mission/Mission.e";
// import { Link } from "@mui/icons-material";
const main_image = "/slider1.jpg";
const AboutNav: FC<AboutNavProps> = ({ sidebars }) => {
  // console.log("inner ->>>>", data[0]);

  return (
    <>
      <MissionNav>
        {sidebars?.map((item: any, idx: any) => (
          <NextLink href={`${item.slug}?id=${item.id}`} passHref key={idx}>
            <a>
              <MissionNavItem>{item.title}</MissionNavItem>
            </a>
          </NextLink>
        ))}
      </MissionNav>
    </>
  );
};

export default AboutNav;
