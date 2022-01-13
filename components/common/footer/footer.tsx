// create a footer component that has 5 columns, each with a title and a list of links except th last one which has img of social media icons and a link to the contact page
// first column has title "Меню" and 8 links
// second column has title "Частным лицам " and 4 links
// third column has title "Юридическим лицам " and 9 links
// fourth column has title "Правовая информация" and 2 links
// fifth column has title "Социальные сети" and 3 logos(instagram, facebook, mail) and a link to the contact page in a line. and a email in another line, after this line there are a phone number and a copyright
// the footer should be fixed at the bottom of the page
// the footer should have a background color of #0D4656

import React, { FC, useState } from 'react';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import {
  Wrapper,
  FooterUL,
  FooterColumn,
  ColumnHeader,
  NumAndAddress,
  FooterBottom,
} from './footer.e';
import Image from 'next/image';

import { GWrapper } from '../../../styles/global-styles.e';
import Logo from '../../../assets/images/footer/logo-bottom.png';
import Instagram from '../../../assets/images/footer/instagram.png';
import Facebook from '../../../assets/images/footer/facebook.png';
import Mail from '../../../assets/images/footer/gmail.png';
import { useTranslation } from 'next-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <GWrapper>
        <div className="footer-container">
          <FooterColumn className="first-column">
            <ColumnHeader>{t('common:menu')}</ColumnHeader>
            <FooterUL>
              <li>
                <NextLink href="/page-person?id=1">
                  <Link>{t('common:home_card_title2_for_individuals')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/page-person?id=2">
                  <Link>{t('common:home_card_title3_Legal_entities')} </Link>
                </NextLink>
              </li>
              {/* <li>
                <NextLink href="/services">
                  <Link>{t('common:Services')}</Link>
                </NextLink>
              </li> */}
              <li>
                <NextLink href="/page-person?id=3">
                  <Link>{t('common:For_partners')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/about?id=4">
                  <Link>{t('common:Company')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/contacts">
                  <Link> {t('common:Contacts')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/news">
                  <Link> {t('common:news')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/insurance-case?id=polit_market">
                  <Link> {t('common:polit_market')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/insurance-case?id=insurance-case ">
                  <Link> {t('common:Insurance_case')}</Link>
                </NextLink>
              </li>
            </FooterUL>
          </FooterColumn>
          <FooterColumn className="second-column">
            <ColumnHeader> {t('common:home_card_title2_for_individuals')} </ColumnHeader>
            <FooterUL>
              <li>
                <NextLink href="/page-persons?id=7">
                  <Link> {t('common:Transport_insurance')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/page-persons?id=9">
                  <Link> {t('common:Property_insurance')} </Link>
                </NextLink>
              </li>
              {/* <li>
                <NextLink href="/services/individual-tax">
                  <Link>{t('common:Individual_tax')}</Link>
                </NextLink>
              </li> */}
              <li>
                <NextLink href="/page-persons?id=10">
                  <Link>{t('common:Travel_insurance')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="page-persons?id=8">
                  <Link>{t('common:Health_insurance')}</Link>
                </NextLink>
              </li>
            </FooterUL>
          </FooterColumn>
          <FooterColumn className="third-column">
            <ColumnHeader>{t('common:home_card_title3_Legal_entities')}</ColumnHeader>
            <FooterUL>
              <li>
                <NextLink href="page-persons?id=11">
                  <Link>{t('common:Transport_insurance')} </Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="page-persons?id=13">
                  <Link>{t('common:Property_insurance')} </Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="page-persons?id=14">
                  <Link>{t('common:Liability_Insurance')}</Link>
                </NextLink>
              </li>
              {/* <li>
                <NextLink href="/services/tax-calculator">
                  <Link>{t('common:Employee_insurance')}</Link>
                </NextLink>
              </li> */}
              <li>
                <NextLink href="page-persons?id=15">
                  <Link>{t('common:Insurance_of_goods_and_carriers')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/individual-tax">
                  <Link>{t('common:Technical_risks_insurance')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/tax-returns">
                  <Link>{t('common:Technical_risks_insurance')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/tax-calculator">
                  <Link>{t('common:Insurance_of_goods_and_carriers')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/tax-calculator">
                  <Link>{t('common:Agricultural_risks_insurance')}</Link>
                </NextLink>
              </li>
            </FooterUL>
          </FooterColumn>
          <FooterColumn className="fourth-column">
            <ColumnHeader>{t('common:legal_information')}</ColumnHeader>
            <FooterUL>
              <li>
                <NextLink href="/services/tax-services">
                  <Link>{t('common:Tax_services')}</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/corporate-tax">
                  <Link>{t('common:Corporate_tax')}</Link>
                </NextLink>
              </li>
            </FooterUL>
          </FooterColumn>
          <FooterColumn className="last-column">
            <ul className="social-net">
              <li>
                <a href="https://www.instagram.com/">
                  <Image src={Instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <Image src={Facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="mailto:uzbekjon2003@gmail.com">
                  <Image src={Mail} alt="gmail" />
                </a>
              </li>
            </ul>
            <a href="mailto:info@omadsugurta.uz" className={'maillink'}>
            info@omadsugurta.uz
            </a>
            <NumAndAddress>
              <span>+998 95 341 71 71</span>
              <span>г. Ташкент, ул. Абая, д. 1</span>
            </NumAndAddress>
            <NumAndAddress>
              <span>+998 (99) 987 65 43</span>
              <span> г. Ташкент ул. Хамид Алимджана, строение 13 А</span>
            </NumAndAddress>
          </FooterColumn>
        </div>
        <FooterBottom>
          <Image src={Logo} alt="logo of Omad" className="bottom-logo" />
          <span>© 1 000 000, Узбекистан, г. Ташкент ул. Хамид Алимджана, строение 13 А</span>
          <small className="khan">© Davidkhan khadjayev</small>
        </FooterBottom>
      </GWrapper>
    </Wrapper>
  );
};

export default Footer;
