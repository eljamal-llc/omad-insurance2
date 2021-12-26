import { FC } from "react";
import Card from "../CardBlock/CardBlock";
import { YurFaceCardProps } from "./yur-face-card.t";
import { CardSection } from "./yur-face-card.e";

const YurFaceCard: FC<YurFaceCardProps> = ({ data }) => {
  return (
    <CardSection>
      {data.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </CardSection>
  );
};

export default YurFaceCard;
