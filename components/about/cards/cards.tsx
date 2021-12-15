import { FC } from "react";
import Card from "./card/card";
import { CardsRow, Wrapper } from "./cards.e";

export interface CardsProps {}
const Cards: FC<CardsProps> = () => {
  return (
    <Wrapper>
      <CardsRow>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsRow>
    </Wrapper>
  );
};

export default Cards;
