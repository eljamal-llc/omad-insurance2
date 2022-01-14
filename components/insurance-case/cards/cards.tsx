import { FC, Key } from "react";

import { CardsProps } from "./cards.t";
import { Wrapper } from "./cards.e";
import Card from "./card/card";
import { CardsRow } from "../../about/cards/cards.e";

const CardsCase: FC<CardsProps> = ({ id, data }) => {
  return (
    <Wrapper>
      <CardsRow>
        {data?.map((item: any, idx: Key | null | undefined) => (
          <Card id={id} key={idx} item={item} />
        ))}
      </CardsRow>
    </Wrapper>
  );
};

export default CardsCase;
