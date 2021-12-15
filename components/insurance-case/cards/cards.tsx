import { FC } from "react";

import { CardsProps } from "./cards.t";
import { Wrapper } from "./cards.e";
import Card from "./card/card";
import { CardsRow } from "../../about/cards/cards.e";

const CardsCase: FC<CardsProps> = () => {
  return (
    <Wrapper>
      <CardsRow>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsRow>
    </Wrapper>
  );
};

export default CardsCase;
