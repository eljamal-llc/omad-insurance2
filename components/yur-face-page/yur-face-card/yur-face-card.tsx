import { FC } from "react";
import Card from "../CardBlock/CardBlock";
import { YurFaceCardProps } from "./yur-face-card.t";
import { CardSection } from "./yur-face-card.e";

const YurFaceCard: FC<YurFaceCardProps> = () => {
  return (
    <CardSection>
      <Card />
      <Card />
      <Card />
    </CardSection>
  );
};

export default YurFaceCard;
