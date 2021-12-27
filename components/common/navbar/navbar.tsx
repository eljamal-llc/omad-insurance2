import { FC, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
// import { Link } from "@mui/material";
import Link from "next/link";
import NavbarModal from "./navbar-modal/navbar-modal";

import { NavbarProps } from "./navbar.t";
import { GWrapper } from "../../../styles/global-styles.e";
import {
  Wrapper,
  NavbarRow,
  NavbarLeft,
  NavbarRight,
  NavbarLogo,
  NavbarLink,
  NavbarBtn,
  LangSwitch
} from "./navbar.e";


import Logo from "../../../assets/images/navbar/logo.png";
import User from "../../../assets/images/navbar/user.svg";
// import { ReactComponent as User } from "../../../assets/images/navbar/user.svg";
import MenuIcon from "@mui/icons-material/Menu";
import {useTranslation} from 'next-i18next'

const Navbar: FC<NavbarProps> = ({ onClass }) => {
  const [navbarModal, setNavbarModal] = useState(false);
  const handleNavbar = () => {
    setNavbarModal(!navbarModal);
  };
  const { t } = useTranslation()
  return (
    <Wrapper className={onClass}>
      <GWrapper>
        <NavbarRow>
          <NavbarLeft>
            <NavbarLogo>
              {/* <NextLink href="/" passHref> */}
              <Link href={"/"} passHref>
                <a>
                  <Image src={Logo} alt="navbar-logo" />
                </a>
              </Link>
              {/* </NextLink> */}
            </NavbarLogo>

            <NextLink href="/" passHref>
              <NavbarLink className="toremove">{t("common:polit_market")}</NavbarLink>
            </NextLink>

            <NextLink href="/" passHref>
              <NavbarLink className="toremove">{t("common:Insurance_case")}</NavbarLink>
            </NextLink>
          </NavbarLeft>
          <NavbarRight>
            <NextLink  href={'/ru'}>
              <LangSwitch className="toremove">RU</LangSwitch>
            </NextLink>
            <NextLink href={'/uz'}>
              <LangSwitch  className="toremove">UZ</LangSwitch>
            </NextLink>
            <NextLink href={'/en'}>
              <LangSwitch  className="toremove">EN</LangSwitch>
            </NextLink>

            <NavbarBtn className="navbar-user toremove">
              <Link href={"/personal-area"}>
                <Image src={User} alt="admin-user" />
              </Link>
            </NavbarBtn>
            <NavbarBtn className="navbar-menu" onClick={handleNavbar}>
            {t("nav:menu")}<MenuIcon />
            </NavbarBtn>
          </NavbarRight>
        </NavbarRow>
      </GWrapper>
      <NavbarModal isModal={navbarModal} />
    </Wrapper>
  );
};

export default Navbar;
