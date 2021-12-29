import { FC } from "react";
import {
  ContactsHomeBlock,
  ContactsHomeBG,
  ContactsBlock,
  ContactsBlockHeading,
  ContactsBlockSlogan,
  ContactsBlockLokations,
  ConImg,
} from "./contacts-home.e";
import { ContactsHomeProps } from "./contacts-home.t";
import Image from "next/image";
import HomeIMg from "../../../assets/images/yur-page/singl-yur-img/home-bg-1.png";
import { GWrapper } from "../../../styles/global-styles.e";
import ContImg from "../../../assets/images/contacts/contact.png";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
const ContactsHome: FC<ContactsHomeProps> = (props: ContactsHomeProps) => {
  const {t} = useTranslation()
  return (
    <ContactsHomeBG>
      <ContactsHomeBlock>
        <ContactsBlock>
          <BreadcrumbsBlock />
          <ContactsBlockHeading> {t('common:Contacts')}</ContactsBlockHeading>
          <ContactsBlockSlogan>«OMAD SUG’URTA»</ContactsBlockSlogan>
          <ContactsBlockLokations>{t('common:Tashkent_city')}</ContactsBlockLokations>
          <ContactsBlockLokations>{t('common:Shaykhantakhur ')}</ContactsBlockLokations>
          <ContactsBlockLokations>{t('common:Lilithugon')}</ContactsBlockLokations>
          <ContactsBlockLokations>
            {t('common:tel')} : +998 (71) 249-02-77 e-mail: omad.insurance.g@mail.ru
          </ContactsBlockLokations>
        </ContactsBlock>
        <ConImg>
          <Image src={ContImg} alt="test" />
        </ConImg>
      </ContactsHomeBlock>
    </ContactsHomeBG>
  );
};
export default ContactsHome;
