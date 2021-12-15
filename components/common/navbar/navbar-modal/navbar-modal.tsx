import { FC, useState } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";
import axios from "axios";

import { ISubMenus, NavbarModalProps } from "./navbar-modal.t";
import {
  ModalMenuItem,
  ModalMenuList,
  ModalRow,
  ModalSubInnerMenu,
  ModalSubMenuItem,
  Wrapper,
} from "./navbar-modal.e";
import { GWrapper } from "../../../../styles/global-styles.e";

axios.get("categories").then((response) => {
  console.log(response);
});

const NavbarModal: FC<NavbarModalProps> = ({ isModal }) => {
  let [subMenus, setSubMenus] = useState([]);

  const menus = [
    {
      id: 1,
      name: "Частныйм лицам",
      isSubMenu: true,
      subMenu: [
        { id: 1, name: "Автострахование" },
        { id: 2, name: "Страхование здоровья" },
        { id: 3, name: "Страхование имущества" },
        { id: 4, name: "Другие программы" },
      ],
    },
    {
      id: 2,
      name: "юридиеским лицам",
      isSubMenu: false,
      subMenu: [
        { id: 1, name: "Автострахование" },
        { id: 2, name: "Страхование здоровья" },
        { id: 3, name: "Страхование имущества" },
        { id: 4, name: "Страхование ответсвенности" },
      ],
    },
    {
      id: 3,
      name: "Партнерам",
      isSubMenu: false,
      subMenu: [
        { id: 1, name: "Автострахование" },
        { id: 2, name: "Страхование здоровья" },
        { id: 3, name: "Страхование имущества" },
        { id: 4, name: "Страхование ответсвенности" },
      ],
    },
    {
      id: 4,
      name: "о компании",
      isSubMenu: false,
    },
    {
      id: 5,
      name: "о компании",
      isSubMenu: false,
    },
    {
      id: 6,
      name: "Магазин полисов",
      isSubMenu: false,
    },
    {
      id: 7,
      name: "Страховой случай",
      isSubMenu: false,
    },
  ];
  return (
    <Wrapper className={isModal ? "active" : ""}>
      <GWrapper className="container">
        <ModalRow>
          <ModalMenuList>
            {menus.map((item, idx) => (
              <ModalMenuItem
                key={idx}
                // @ts-ignore
                onMouseMove={() => item.isSubMenu && setSubMenus(item.subMenu)}
                onMouseLeave={() => setSubMenus([])}
              >
                <NextLink href="/" passHref>
                  <Link>{item.name}</Link>
                </NextLink>
                {item.isSubMenu && (
                  <ModalSubInnerMenu className="inner-menu">
                    {item.subMenu?.map((item, idx) => (
                      <ModalSubMenuItem key={idx}>
                        <NextLink href="/" passHref>
                          {/* @ts-ignore */}
                          <Link>{item.name}</Link>
                        </NextLink>
                      </ModalSubMenuItem>
                    ))}
                  </ModalSubInnerMenu>
                )}
              </ModalMenuItem>
            ))}
          </ModalMenuList>
        </ModalRow>
      </GWrapper>
    </Wrapper>
  );
};

export default NavbarModal;
