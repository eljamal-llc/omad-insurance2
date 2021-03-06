import { FC, useEffect, useState } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";
import axios from "axios";
import { api } from "../../../../services/api";
import { IMenus, NavbarModalProps } from "./navbar-modal.t";
import {useTranslation} from 'next-i18next'
import slugify from "slugify";
import {
  ModalMenuItem,
  ModalMenuList,
  ModalRow,
  ModalSubInnerMenu,
  ModalSubMenuItem,
  Wrapper,
} from "./navbar-modal.e";
import { GWrapper } from "../../../../styles/global-styles.e";

import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";

const NavbarModal: FC<NavbarModalProps> = ({ isModal }) => {
  let [menuHover, setMenuHover] = useState(false);
  let [menus, setMenus] = useState<IMenus[]>();
  useEffect(() => {
    api.get("categories").then((response) => {
      if (response.data.success) {
        setMenus(response.data.data);
      }
    });
  }, []);

  return (
    <Wrapper className={isModal ? "active" : ""}>
      <GWrapper className="container">
        <ModalRow>
          <ModalMenuList>
            {menus?.map((item, idx) => (
              <ModalMenuItem
                key={idx}
                // @ts-ignore
                onMouseMove={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
              >
                <NextLink href={`/catalog/${item.id}/${slugify(item.name)}`} passHref>
                  <Link>
                    {item.name}
                    {item.isSubMenu && (
                      <>
                        <span className="arrow-down">
                          {menuHover ? (
                            <ArrowDropUpSharpIcon />
                          ) : (
                            <ArrowDropDownSharpIcon />
                          )}
                        </span>
                      </>
                    )}
                  </Link>
                </NextLink>
                {item.isSubMenu && (
                  <ModalSubInnerMenu className="inner-menu">
                    {item.sub?.map((itemChild, idx) => (
                      <ModalSubMenuItem key={idx}>
                        <NextLink
                          href={`/${itemChild.link}?id=${itemChild.id}`}
                          passHref
                        >
                          <Link>{itemChild.name}</Link>
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
