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
  LangSwitch,
  LangSwitchSelect,
} from "./navbar.e";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";
import Logo from "../../../assets/images/navbar/logo.png";
import User from "../../../assets/images/navbar/user.svg";
// import { ReactComponent as User } from "../../../assets/images/navbar/user.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { i18n, useTranslation } from "next-i18next";
const Navbar: FC<NavbarProps> = ({ onClass }) => {
  const [navbarModal, setNavbarModal] = useState(false);
  // const { t, i18n } = useTranslation()
  const [active , setActive ] = useState('ru')
  // const changeLanguage = (language: string | undefined) => {
  //   i18n.changeLanguage(language);
  // };
  const router = useRouter();

  const handleNavbar = () => {
    setNavbarModal(!navbarModal);
  };
 const setRu = () =>{
  setLanguage("ru")
    if(router.locale == 'ru'){
      setActive('ru')
  
     }
   
 }
 const setEn = () =>{
  setLanguage("en")
  console.log(router.locale)
    if(router.locale == 'en'){
      setActive('en')
  
     }
  
 }
 const setUz = () =>{
  setActive('uz')
  setLanguage("uz")
 }
  const { t } = useTranslation();
  return (
      <Wrapper  className={onClass}>
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

                  <NextLink href="/insurance-case?id=polit_market" passHref>
                    <NavbarLink className="toremove">
                      {t("common:polit_market")}
                    </NavbarLink>
                  </NextLink>

                  <NextLink href="/insurance-case?id=insurance-case" passHref>
                    <NavbarLink className="toremove">
                      {t("common:Insurance_case")}
                    </NavbarLink>
                  </NextLink>
                </NavbarLeft>
                <NavbarRight>
                  {/* <LangSwitchSelect> */}
                  <LangSwitch
                    onClick={async () => await  setRu()}
                    value={"ru"}
                    className={active == 'ru' ? 'active' : ''}
                  >
                    RU
                  </LangSwitch>
                  <LangSwitch
                    onClick={async () => await setEn()}
                    value={"en"}
                    className={active == 'en' ? 'active' : ''}
                  >
                    EN
                  </LangSwitch>
                  <LangSwitch
                    onClick={async () => await  setUz()}
                    value={"uz"}
                    className={active == 'uz' ? 'active' : ''}
                  >
                    UZ
                  </LangSwitch>
                  
                  {/* </LangSwitchSelect> */}
                  <NavbarBtn className="navbar-user toremove">
                    <Link href={"/personal-area"}>
                      <Image src={User} alt="admin-user" />
                    </Link>
                  </NavbarBtn>
                  <NavbarBtn className="navbar-menu" onClick={handleNavbar}>
                    {t("common:menu")}
                    <MenuIcon />
                  </NavbarBtn>
                </NavbarRight>
              </NavbarRow>
            </GWrapper>
            <NavbarModal isModal={navbarModal} />
          </Wrapper>
   
  );
};

export default Navbar;
