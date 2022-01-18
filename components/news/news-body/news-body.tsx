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
        {/* <SectionTitle
          title="Lorem non natoque nunc."
          color="black"
          classN="title"
        />
        <div className="body-center">
          <div className="body-center__left">
            <h6 className="section__name">Urna orci sit varius etiam.</h6>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing vulputate quis viverra odio. Ornare cras iaculis
              aliquet sed ac. Lectus nulla enim orci, vel egestas odio
              fermentum. Elementum velit ullamcorper nunc massa a dolor orci
              elementum sed. Enim elit rhoncus urna commodo morbi amet nec.
              Aliquet turpis id pellentesque urna semper egestas sagittis. Diam
              sit vitae fringilla eu cum etiam. Arcu sit tellus diam facilisi.
              Neque hendrerit nam egestas hac vestibulum non amet suspendisse.
              Tellus sed mus eu quis cursus eu egestas lobortis sollicitudin.
              Pretium semper est tincidunt pellentesque vulputate arcu molestie
              id vulputate. Massa lacinia aenean id enim. Facilisi vitae amet
              lectus tincidunt dolor pulvinar ipsum. Est molestie tristique nibh
              augue platea sagittis urna mattis massa. Enim adipiscing ridiculus
              quis ultricies habitant convallis sit. Risus lorem ut at.
            </p>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing vulputate quis viverra odio. Ornare cras iaculis
              aliquet sed ac. Lectus nulla enim orci, vel egestas odio
              fermentum. Elementum velit ullamcorper nunc massa a dolor orci
              elementum sed. Enim elit rhoncus urna commodo morbi amet nec.
              Aliquet turpis id pellentesque urna semper egestas sagittis. Diam
              sit vitae fringilla eu cum etiam. Arcu sit tellus diam facilisi.
              Neque hendrerit nam egestas hac vestibulum non amet suspendisse.
              Tellus sed mus eu quis cursus eu egestas lobortis sollicitudin.
              Pretium semper est tincidunt pellentesque vulputate arcu molestie
              id vulputate. Massa lacinia aenean id enim. Facilisi vitae amet
              lectus tincidunt dolor pulvinar ipsum. Est molestie tristique nibh
              augue platea sagittis urna mattis massa. Enim adipiscing ridiculus
              quis ultricies habitant convallis sit. Risus lorem ut at.
            </p>
          </div>
          <div className="body-center__right">
            <div className="section__image">
              <Image src={SliderImg1} alt="test1" />
            </div>
          </div>
        </div>
        <SectionTitle
          title="Lorem non natoque nunc."
          color="black"
          classN="title"
        />
        <div className="news-center">
          <div className="news-center__left">
            <div className="news-center__image">
              <Image src={SliderImg1} alt="test1" />
            </div>
          </div>
          <div className="news-center__right">
            <div className="news-center__item">
              <div className="news-center__number">1</div>
              <p className="news-center__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                amet laoreet mi sed. Risus, tempor bibendum fames amet nisl odio
                purus auctor non. Eget aliquet porttitor tempor tortor, egestas
                enim. Volutpat cum nunc, nec consectetur semper sit. Aliquam
                urna semper diam nec
              </p>
            </div>
            <div className="news-center__item">
              <div className="news-center__number">2</div>
              <p className="news-center__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                amet laoreet mi sed. Risus, tempor bibendum fames amet nisl odio
                purus auctor non. Eget aliquet porttitor tempor tortor, egestas
                enim. Volutpat cum nunc, nec consectetur semper sit. Aliquam
                urna semper diam nec
              </p>
            </div>
            <div className="news-center__item">
              <div className="news-center__number">3</div>
              <p className="news-center__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                amet laoreet mi sed. Risus, tempor bibendum fames amet nisl odio
                purus auctor non. Eget aliquet porttitor tempor tortor, egestas
                enim. Volutpat cum nunc, nec consectetur semper sit. Aliquam
                urna semper diam nec
              </p>
            </div>
          </div>
        </div> */}
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
