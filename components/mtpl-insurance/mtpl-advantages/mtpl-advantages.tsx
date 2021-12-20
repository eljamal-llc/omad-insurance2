import { FC } from "react";
import { GWrapper } from "../../../styles/global-styles.e";
import { MtplAdventagesProps } from "./mtpl-advantages.t";

import {
  MtplAdventagesHeading,
  MtplAdventagesBlock,
  MtplAdventagesCard,
  MtplAdventagesCardHeading,
  MtplAdventagesCardText,
} from "./mtpl-advantages.e";

const MtplAdventages: FC<MtplAdventagesProps> = () => {
  return (
    // <GWrapper>
    <>
      <MtplAdventagesHeading>
        Преимущества страхования ОСАГО онлайн
      </MtplAdventagesHeading>
      <MtplAdventagesBlock>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
            Максимально онлайн
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
            В OMAD основные процессы — от оформления до урегулирования — онлайн.
            Быстро и удобно
          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
            Максимально онлайн
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
            В OMAD основные процессы — от оформления до урегулирования — онлайн.
            Быстро и удобно
          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
            Максимально онлайн
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
            В OMAD основные процессы — от оформления до урегулирования — онлайн.
            Быстро и удобно
          </MtplAdventagesCardText>
        </MtplAdventagesCard>
        <MtplAdventagesCard>
          <MtplAdventagesCardHeading>
            Максимально онлайн
          </MtplAdventagesCardHeading>
          <MtplAdventagesCardText>
            В OMAD основные процессы — от оформления до урегулирования — онлайн.
            Быстро и удобно
          </MtplAdventagesCardText>
        </MtplAdventagesCard>
      </MtplAdventagesBlock>
    </>

    // </GWrapper>
  );
};
export default MtplAdventages;
