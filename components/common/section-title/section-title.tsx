import { FC } from "react";
import { SectionTitleProps } from "./section-title.t";
import { Title } from "./section-title.e";

const SectionTitle: FC<SectionTitleProps> = ({ color, classN, title }) => {
  return (
    <Title color={color} className={classN}>
      {title}
    </Title>
  );
};

export default SectionTitle;
