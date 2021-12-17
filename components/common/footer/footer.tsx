// create a footer component that has 5 columns, each with a title and a list of links except th last one which has img of social media icons and a link to the contact page
// first column has title "Меню" and 8 links
// second column has title "Частным лицам " and 4 links
// third column has title "Юридическим лицам " and 9 links
// fourth column has title "Правовая информация" and 2 links
// fifth column has title "Социальные сети" and 3 logos(instagram, facebook, mail) and a link to the contact page in a line. and a email in another line, after this line there are a phone number and a copyright
// the footer should be fixed at the bottom of the page
// the footer should have a background color of #0D4656
 
import React, { FC, useState } from 'react';
import NextLink from "next/link";
import { Link } from "@mui/material";
import { Wrapper, FooterUL, FooterColumn, ColumnHeader, NumAndAddress, FooterBottom } from './footer.e'
import Image from "next/image";

import { GWrapper } from '../../../styles/global-styles.e';
import Logo from "../../../assets/images/footer/logo-bottom.png";
import Instagram from "../../../assets/images/footer/instagram.png";
import Facebook from "../../../assets/images/footer/facebook.png";
import Mail from "../../../assets/images/footer/gmail.png";

const Footer: FC = () => {

    return (
        <Wrapper>
            <GWrapper>
                <div className="footer-container">
                    <FooterColumn className="first-column">
                        <ColumnHeader>Меню</ColumnHeader>
                        <FooterUL>
                            <li>
                                <NextLink href="/">
                                    <Link>Частным лицам </Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/about">
                                    <Link>Юридическим лицам </Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services">
                                    <Link>Услуги</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/contacts">
                                    <Link>Партнерам</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/faq">
                                    <Link>Компания</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/faq">
                                    <Link>Контакты</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/faq">
                                    <Link>Новости</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/faq">
                                    <Link>Магазин полисов</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/faq">
                                    <Link>Страховой случай</Link>
                                </NextLink>
                            </li>
                        </FooterUL>
                    </FooterColumn>
                    <FooterColumn className="second-column">
                        <ColumnHeader>Частным лицам</ColumnHeader>
                        <FooterUL>
                            <li>
                                <NextLink href="/services/tax-services">
                                    <Link>Страхование транспорта </Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/corporate-tax">
                                    <Link>Страхование имуцества </Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/individual-tax">
                                    <Link>Индивидуальный налог</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-returns">
                                    <Link>Страхование путешествия</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-calculator">
                                    <Link>Страхование здоровья</Link>
                                </NextLink>
                            </li>
                        </FooterUL>
                    </FooterColumn>
                    <FooterColumn className="third-column">
                        <ColumnHeader>Юридическим лицам</ColumnHeader>
                        <FooterUL>
                            <li>
                                <NextLink href="/services/tax-services">
                                    <Link>Страхование транспорта </Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/corporate-tax">
                                    <Link>Страхование имуцества </Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-returns">
                                    <Link>Страхование ответственности</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-calculator">
                                    <Link>Страхование сотрудников</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-services">
                                    <Link>Страхование грузов и грузоперевозчиков</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/individual-tax">
                                    <Link>Страхование технических рисков</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-returns">
                                    <Link>Страхование технических рисков</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-calculator">
                                    <Link>Страхование финансовых рисков</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/tax-calculator">
                                    <Link>Страхование сельскохояйственных рисков</Link>
                                </NextLink>
                            </li>
                        </FooterUL>
                    </FooterColumn>
                    <FooterColumn className="fourth-column">
                        <ColumnHeader>Правовая информация</ColumnHeader>
                        <FooterUL>
                            <li>
                                <NextLink href="/services/tax-services">
                                    <Link>Налоговые услуги</Link>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/services/corporate-tax">
                                    <Link>Корпоративный налог</Link>
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
                        <a href="mailto:uzbekjon2003@gmail.com" className={"maillink"} >@Info.totembo.com</a>
                        <NumAndAddress>
                            <span>+998 (99) 987 65 43</span>
                            <span>г. Ташкент, ул. Абая, д. 1</span>
                        </NumAndAddress>
                        <NumAndAddress>
                            <span>+998 (99) 987 65 43</span>
                            <span>г. Ташкент, ул. Абая, д. 1</span>
                        </NumAndAddress>
                    </FooterColumn>
                </div>
                <FooterBottom>
                    <Image src={Logo} alt="logo of Omad" width={200} className="bottom-logo" />
                    <span>© Lorem ipsum dolor. 2021 Все права защищены</span>
                    <small className='khan'>© Davidkhan khadjayev</small>
                </FooterBottom>
            </GWrapper>
        </Wrapper>
    );
};

export default Footer;