import { FC } from "react";
import { PoliticsBodyProps } from "./politics-body.t";
import { Wrapper } from "./politics-body.e";
import { GWrapper } from "../../../styles/global-styles.e";
import { SectionTitle } from "../..";

const PoliticsBody: FC<PoliticsBodyProps> = () => {
  return (
    <Wrapper>
      <GWrapper>
        <SectionTitle title="Lorem non natoque nunc." color="black" />
        <div className="body-top">
          <div className="body-top__item">
            <div className="body-top__number">
              <span>1</span>
            </div>
            <div className="body-top__text">
              <h6 className="body-top__name">
                Vitae blandit consectetur viverra.
              </h6>
              <p className="body-top__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                tortor quam ultricies ut leo integer tortor. Pellentesque at at
                penatibus ut proin viverra dignissim nunc.
              </p>
            </div>
          </div>
        </div>
      </GWrapper>
    </Wrapper>
  );
};

export default PoliticsBody;
