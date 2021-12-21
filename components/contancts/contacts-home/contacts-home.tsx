import { FC } from "react";
import {
    ContactsHomeBlock,
    ContactsHomeBG,
    ContactsBlock,
    ContactsBlockHeading,
    ContactsBlockSlogan,
    ContactsBlockLokations,
    ConImg
        } from "./contacts-home.e";
import { ContactsHomeProps } from "./contacts-home.t";
import Image from "next/image";
import HomeIMg from "../../../assets/images/yur-page/singl-yur-img/home-bg-1.png";
import { GWrapper } from "../../../styles/global-styles.e";
import  ContImg  from "../../../assets/images/contacts/contact.png";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
const ContactsHome: FC<ContactsHomeProps> = (
  props: ContactsHomeProps
) => {
  return (
    <ContactsHomeBG>
        <ContactsHomeBlock>
            <ContactsBlock>
                <BreadcrumbsBlock/>
                <ContactsBlockHeading>Контакты</ContactsBlockHeading>
                <ContactsBlockSlogan>«OMAD SUG’URTA»</ContactsBlockSlogan>
                <ContactsBlockLokations>город Ташкент</ContactsBlockLokations>
                <ContactsBlockLokations>Шайхантахурский район</ContactsBlockLokations>
                <ContactsBlockLokations>Лайлитугон 89</ContactsBlockLokations>
                <ContactsBlockLokations>тел.: +998 (71) 249-02-77e-mail: omad.insurance.g@mail.ru</ContactsBlockLokations>
            </ContactsBlock>
            <ConImg>
                <Image src={ContImg}/>
            </ConImg>
        </ContactsHomeBlock>
    </ContactsHomeBG>
  );
};
export default ContactsHome;
