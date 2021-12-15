import { FC, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

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
} from "./navbar.e";

import Logo from "../../../assets/images/navbar/logo.png";
import User from "../../../assets/images/navbar/user.svg";
// import { ReactComponent as User } from "../../../assets/images/navbar/user.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: FC<NavbarProps> = ({ onClass }) => {
  const [navbarModal, setNavbarModal] = useState(false);
  const handleNavbar = () => {
    setNavbarModal(!navbarModal);
  };
  return (
    <Wrapper className={onClass}>
      <GWrapper>
        <NavbarRow>
          <NavbarLeft>
            <NavbarLogo>
              <NextLink href="/" passHref>
                <Link>
                  <Image src={Logo} alt="navbar-logo" />
                </Link>
              </NextLink>
            </NavbarLogo>

            <NextLink href="/" passHref>
              <NavbarLink className="toremove">Магазин полисов</NavbarLink>
            </NextLink>

            <NextLink href="/" passHref>
              <NavbarLink className="toremove">Страховой случай</NavbarLink>
            </NextLink>
          </NavbarLeft>
          <NavbarRight>
            <NavbarBtn className="toremove">RU</NavbarBtn>
            <NavbarBtn className="navbar-user toremove">
              <Image src={User} alt="admin-user" />
            </NavbarBtn>
            <NavbarBtn className="navbar-menu" onClick={handleNavbar}>
              Menu <MenuIcon />
            </NavbarBtn>
          </NavbarRight>
        </NavbarRow>
      </GWrapper>
      <NavbarModal isModal={navbarModal} />
    </Wrapper>
  );
};

export default Navbar;
