import { FC } from "react";

import { CardsProps } from "./cards.t";
import { Wrapper } from "./cards.e";
import Card from "./card/card";
import { CardsRow } from "../../about/cards/cards.e";

const CardsCase: FC<CardsProps> = ({ id, data }) => {
  return (
    <Wrapper>
      <CardsRow>
        {id == 17 ? (
          <>
            {data?.map((item, idx) => (
              <Card id={id} key={idx} />
            ))}
          </>
        ) : (
          <>
            {data?.map((item, idx) => (
              <Card id={id} key={idx} />
            ))}
          </>
        )}
      </CardsRow>
    </Wrapper>
  );
};

export default CardsCase;
