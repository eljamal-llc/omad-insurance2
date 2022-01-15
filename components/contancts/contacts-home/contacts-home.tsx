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
const ContactsHome: FC<ContactsHomeProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    data && (
      <ContactsHomeBG>
        <ContactsHomeBlock>
          <ContactsBlock>
            <BreadcrumbsBlock
              link1="Главная"
              url3={""}
              url2={"/contacts"}
              link2="Контакты"
              link3=""
            />
            <ContactsBlockHeading> {data.title}</ContactsBlockHeading>
            <ContactsBlockSlogan>{data.company}</ContactsBlockSlogan>
            <ContactsBlockLokations>
              address: {data.address}
            </ContactsBlockLokations>
            <ContactsBlockLokations>
              {t("common:tel")} : {data.tel} <br />
              e-mail: {data.email}
            </ContactsBlockLokations>
          </ContactsBlock>
          <ConImg>
            {/* <Image src={ContImg} alt="test" />
             */}
            <img src={data.image} alt={data.company} />
          </ConImg>
        </ContactsHomeBlock>
      </ContactsHomeBG>
    )
  );
};
export default ContactsHome;
