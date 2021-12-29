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
import { ContactsCardsProps } from "./contacts-cards.t";
import Image from "next/image";
import { GWrapper } from "../../../styles/global-styles.e";
import contactCartImg from "../../../assets/images/contacts/contactCartImg.png";
import { useTranslation } from "react-i18next";
const ContactsCards: FC<ContactsCardsProps> = (props: ContactsCardsProps) => {
  const {t} = useTranslation()
  return (
    <>
      <CardsHead>
        <CardsHeadItem>
          <CardsText>{t('common:Contacts_of_branches')}</CardsText>
        </CardsHeadItem>
        <CardsHeadItem>
          <CardsTextMini>{t('common:Address')} </CardsTextMini>
        </CardsHeadItem>
        <CardsHeadItem>
          <CardsTextMini>{t('common:Telephones')}</CardsTextMini>
        </CardsHeadItem>
        <CardsHeadItem>
          <CardsTextMini>{t('common:Opening_')}</CardsTextMini>
        </CardsHeadItem>
      </CardsHead>
      <CardContacts>
        <CardImg>
          <Image src={contactCartImg} alt="test" />
        </CardImg>
        <ContentsCard>
          <CardsData>
            <CardContactsHeading>Ташкент</CardContactsHeading>
            <CardContactsText>
              {" "}
              Тошкент ш, Юнус обод тумани,
              <br /> Матбуотчилар кўчаси, 17 уй
            </CardContactsText>
            <CardAdress>
              <MLoc>M</MLoc> Юнус обод
            </CardAdress>
          </CardsData>
          <CardsData>
            <CardContactsHeading>0 371 249-02-77</CardContactsHeading>
            <CardContactsHeading>+998 95 144-03-34</CardContactsHeading>
          </CardsData>
          <CardsData>
            <CardContactsHeading>пн-пт: 10:00-20:00</CardContactsHeading>
            <CardContactsHeading>сб: 10:00-18:00</CardContactsHeading>
            <CardContactsHeading>вс: 10:00-16:00</CardContactsHeading>
          </CardsData>
        </ContentsCard>
      </CardContacts>
      <CardContacts>
        <CardImg>
          <Image src={contactCartImg} alt="test" />
        </CardImg>
        <ContentsCard>
          <CardsData>
            <CardContactsHeading>Ташкент</CardContactsHeading>
            <CardContactsText>
              {" "}
              Тошкент ш, Юнус обод тумани,
              <br /> Матбуотчилар кўчаси, 17 уй
            </CardContactsText>
            <CardAdress>
              <MLoc>M</MLoc> Юнус обод
            </CardAdress>
          </CardsData>
          <CardsData>
            <CardContactsHeading>0 371 249-02-77</CardContactsHeading>
            <CardContactsHeading>+998 95 144-03-34</CardContactsHeading>
          </CardsData>
          <CardsData>
            <CardContactsHeading>пн-пт: 10:00-20:00</CardContactsHeading>
            <CardContactsHeading>сб: 10:00-18:00</CardContactsHeading>
            <CardContactsHeading>вс: 10:00-16:00</CardContactsHeading>
          </CardsData>
        </ContentsCard>
      </CardContacts>
      <CardContacts>
        <CardImg>
          <Image src={contactCartImg} alt="test" />
        </CardImg>
        <ContentsCard>
          <CardsData>
            <CardContactsHeading>Ташкент</CardContactsHeading>
            <CardContactsText>
              {" "}
              Тошкент ш, Юнус обод тумани,
              <br /> Матбуотчилар кўчаси, 17 уй
            </CardContactsText>
            <CardAdress>
              <MLoc>M</MLoc> Юнус обод
            </CardAdress>
          </CardsData>
          <CardsData>
            <CardContactsHeading>0 371 249-02-77</CardContactsHeading>
            <CardContactsHeading>+998 95 144-03-34</CardContactsHeading>
          </CardsData>
          <CardsData>
            <CardContactsHeading>пн-пт: 10:00-20:00</CardContactsHeading>
            <CardContactsHeading>сб: 10:00-18:00</CardContactsHeading>
            <CardContactsHeading>вс: 10:00-16:00</CardContactsHeading>
          </CardsData>
        </ContentsCard>
      </CardContacts>
    </>
  );
};
export default ContactsCards;
