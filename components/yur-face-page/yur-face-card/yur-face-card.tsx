import { FC } from "react";
import { YurFaceCardProps } from "./yur-face-card";
import {CardSection} from './yur-face-card.e'
import Card from '../CardBlock/CardBlock'
const YurFaceCard: FC<YurFaceCardProps> = () => {

  return (
    <CardSection>
        <Card/>
        <Card/>
        <Card/>
    </CardSection>
    );
};

export default YurFaceCard;
