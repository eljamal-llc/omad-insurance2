import { FC } from "react";
import { AboutInfoProps } from "./about-info.t";
import { InfoRow, Wrapper } from "./about-info.e";
import LeftPanel from "./left-panel/left-panel";
import RightPanel from "./right-panel/right-panel";

const AboutInfo: FC<AboutInfoProps> = ({ dataLeft, dataRight }) => {
  return (
    <Wrapper>
      <InfoRow>
        <LeftPanel dataLeft={dataLeft} />
        <RightPanel dataRight={dataRight} />
      </InfoRow>
    </Wrapper>
  );
};

export default AboutInfo;
