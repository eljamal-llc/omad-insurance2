import { FC } from "react";
import Card from "./card/card";
import { CardsRow, Wrapper } from "./cards.e";
import { useTranslation } from "react-i18next";
import { CardsProps } from "./cards.t";

const Cards: FC<CardsProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CardsRow>
        {data?.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </CardsRow>
    </Wrapper>  
  );
};

export default Cards;
