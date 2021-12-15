import { FC } from "react";
import { AboutInfoProps } from "./about-info.t";
import { InfoRow, Wrapper } from "./about-info.e";
import LeftPanel from "./left-panel/left-panel";
import RightPanel from "./right-panel/right-panel";

const AboutInfo: FC<AboutInfoProps> = () => {
  return (
    <Wrapper>
      <InfoRow>
        <LeftPanel />
        <RightPanel />
      </InfoRow>
    </Wrapper>
  );
};

export default AboutInfo;
