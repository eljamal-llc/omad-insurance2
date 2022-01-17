import { FC } from "react";

import {
  CardsHead,
  CardsHeadItem,
  CardsText,
  CardImg,
  CardContacts,
  CardsTextMini,
  CardContactsHeading,
  CardContactsText,
  MLoc,
  CardsData,
  ContentsCard,
  CardAdress,
} from "./contacts-cards.e";
import parse from "html-react-parser";
import { ContactsCardsProps } from "./contacts-cards.t";
import Image from "next/image";
import { GWrapper } from "../../../styles/global-styles.e";
import contactCartImg from "../../../assets/images/contacts/contactCartImg.png";
import { useTranslation } from "react-i18next";
const ContactsCards: FC<ContactsCardsProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    data && (
      <>
        <CardsHead>
          <CardsHeadItem>
            <CardsText>{t("common:Contacts_of_branches")}</CardsText>
          </CardsHeadItem>
          <CardsHeadItem>
            <CardsTextMini>{t("common:Address")} </CardsTextMini>
          </CardsHeadItem>
          <CardsHeadItem>
            <CardsTextMini>{t("common:Telephones")}</CardsTextMini>
          </CardsHeadItem>
          <CardsHeadItem>
            <CardsTextMini>{t("common:Opening_")}</CardsTextMini>
          </CardsHeadItem>
        </CardsHead>
        {data.map((item: any, idx: any) => (
          <CardContacts key={idx}>
            <CardImg>
              {/* <Image src={contactCartImg} alt="test" /> */}
              <img src={item.image} alt={item.district} />
            </CardImg>
            <ContentsCard>
              <CardsData>
                <CardContactsHeading>{item.city}</CardContactsHeading>
                <CardContactsText>{item.address}</CardContactsText>
                <CardAdress>
                  <MLoc>M</MLoc>
                  {item.metro}
                </CardAdress>
              </CardsData>
              <CardsData>
                <CardContactsHeading>{parse(item.contact)}</CardContactsHeading>
              </CardsData>
              <CardsData>{parse(item.work_time)}</CardsData>
            </ContentsCard>
          </CardContacts>
        ))}
      </>
    )
  );
};
export default ContactsCards;
