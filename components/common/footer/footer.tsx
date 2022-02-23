import React, { FC, useState } from "react";
import Link from "next/link";
import {
  Wrapper,
  FooterUL,
  FooterColumn,
  ColumnHeader,
  NumAndAddress,
  FooterBottom,
} from "./footer.e";
import Image from "next/image";
import { FooterProps } from "./footer.t";

import { GWrapper } from "../../../styles/global-styles.e";
import Logo from "../../../assets/images/footer/logo-bottom.png";
import Instagram from "../../../assets/images/footer/instagram.png";
import Facebook from "../../../assets/images/footer/facebook.png";
import Mail from "../../../assets/images/footer/gmail.png";
import { useTranslation } from "next-i18next";

const Footer: FC<FooterProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {data && (
        <GWrapper>
          <div className="footer-container">
            {/* @ts-ignore */}
            {data.categories.map((item, idx) => (
              <FooterColumn className="c-column" key={idx}>
                <ColumnHeader>{item.title}</ColumnHeader>
                <FooterUL>
                  {/* @ts-ignore */}
                  {item.fields.map((link, linkId) => (
                    <li key={linkId}>
                      <Link href={`/${link.slug}?id=${link.id}`} passHref>
                        <a>{link.title}</a>
                      </Link>
                    </li>
                  ))}
                </FooterUL>
              </FooterColumn>
            ))}

            <FooterColumn className="last-column">
              <ul className="social-net">
                {Object.keys(data.social_networks).map(function (key) {
                  return (
                    <li key={key}>
                      <Link href={data.social_networks[key].url}>
                        <a>
                          {key == "telegram" && (
                            <Image src={Instagram} alt="instagram" />
                          )}
                          {key == "gmail" && <Image src={Mail} alt="gmail" />}
                          {key == "facebook" && (
                            <Image src={Facebook} alt="facebook" />
                          )}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a href="mailto:uzbekjon2003@gmail.com" className={"maillink"}>
                @Info.totembo.com
              </a>
              {/* @ts-ignore */}
              {data.phone_numbers.map((item, idx) => (
                <NumAndAddress key={idx}>
                  <span>{item.number}</span>
                  <span>{item.address}</span>
                </NumAndAddress>
              ))}

              {/* <NumAndAddress>
                <span>+998 (99) 987 65 43</span>
                <span>г. Ташкент, ул. Абая, д. 1</span>
              </NumAndAddress> */}
            </FooterColumn>
          </div>
          <FooterBottom>
            <Image src={Logo} alt="logo of Omad" className="bottom-logo" />
            <span>© El jamal group все   права защищены</span>
            <small className="khan">© Davidkhan khadjayev</small>
          </FooterBottom>
        </GWrapper>
      )}
    </Wrapper>
  );
};

export default Footer;
