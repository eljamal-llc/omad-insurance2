import { FC, useState, useContext } from "react";
import Image from "next/image";
import NextLink from "next/link";
// import { Link } from "@mui/material";
import Link from "next/link";
import NavbarModal from "./navbar-modal/navbar-modal";
import { parseCookies } from "nookies";
import { AuthContext } from "../../../context/AuthContext";

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
  TestDiv
} from "./navbar.e";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";
import Logo from "../../../assets/images/navbar/logo.png";
import User from "../../../assets/images/navbar/user.svg";
// import { ReactComponent as User } from "../../../assets/images/navbar/user.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { i18n, useTranslation } from "next-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Navbar: FC<NavbarProps> = ({ onClass }) => {
  const { "nextauth.token": token } = parseCookies();
  const [navbarModal, setNavbarModal] = useState(false);
  // const { t, i18n } = useTranslation()
  // const changeLanguage = (language: string | undefined) => {
  //   i18n.changeLanguage(language);
  // };
  const router = useRouter();
  const { logOut } = useContext(AuthContext);

  const handleNavbar = () => {
    setNavbarModal(!navbarModal);
  };
  const setRu = () => {
    setLanguage("ru");
  };
  const setEn = () => {
    console.log(router.locale);
  };
  const setUz = () => {
    setLanguage("uz");
  };
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <TestDiv>
            <LangSwitch
              onClick={async () => await setRu()}
              value={"ru"}
              className={router.locale == "ru" ? "active" : ""}
            >
              RU
            </LangSwitch>
            <NextLink href={"/"} locale="en">
              <LangSwitch
                onClick={async () => await setEn()}
                value={"en"}
                className={router.locale == "en" ? "active" : ""}
              >
                EN
              </LangSwitch>
            </NextLink>

            <LangSwitch
              onClick={async () => await setUz()}
              value={"uz"}
              className={router.locale == "uz" ? "active" : ""}
            >
              UZ
            </LangSwitch>
            </TestDiv>
           

            {/* </LangSwitchSelect> */}
            {!!token ? (
              <>
                {/* <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Dashboard
                </Button> */}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link href={"/personal-area"} passHref>
                      <a>Profile</a>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem
                    onClick={() => {
                      logOut();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
                <NavbarBtn
                  className="navbar-user toremove avtive"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Image src={User} alt="admin-user" />
                </NavbarBtn>
              </>
            ) : (
              <NavbarBtn className="navbar-user toremove">
                <Link href={"/auth"} passHref>
                  <a>
                    <Image src={User} alt="admin-user" />
                  </a>
                </Link>
              </NavbarBtn>
            )}

            <NavbarBtn className="navbar-menu" onClick={handleNavbar}>
              {t("common:menu")}
              <MenuIcon />
            </NavbarBtn>
            {/* <div onClick={() => logOut()}> logOut</div> */}
          </NavbarRight>
        </NavbarRow>
      </GWrapper>
      <NavbarModal isModal={navbarModal} />
    </Wrapper>
  );
};

export default Navbar;
