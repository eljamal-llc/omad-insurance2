import { FC, useEffect, useState } from "react";
import parse from "html-react-parser";
import { NewsBodyProps } from "./news-body.t";
import { Wrapper } from "./news-body.e";
import { MWrapper } from "../../../styles/global-styles.e";
import { SectionTitle } from "../..";

import FourSlider from "./four-slider/four-slider";

const NewsBody: FC<NewsBodyProps> = ({ news }) => {
  return (
    <Wrapper>
      <MWrapper>
        {news && (
          <>
          {/* @tsignore */}
            <SectionTitle title={news?.title} color="black" classN="title" />
            {parse(news.text)}
          </>   
        )}
       
        <SectionTitle
          title="Други новости"
          color="black"
          classN="title-slider"
        />
        <div className="four-sldier">
          <FourSlider />
        </div>
      </MWrapper>
    </Wrapper>
  );
};

export default NewsBody;
