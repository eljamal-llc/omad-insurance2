import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import parse from 'html-react-parser';
import slugify from 'slugify';
import { SliderCardProps } from './slider-card.t';

import {
  SliderImg,
  SliderLink,
  SliderList,
  SliderListItem,
  SliderTitle,
  Wrapper,
  CardContent,
  
} from './slider-card.e';

import Slider1 from '../../../../assets/images/multi-slider/slider-1.jpg';

const SliderCard: FC<SliderCardProps> = ({ item, link }) => {
  const { name, info, image, id } = item;
  return (
    <Wrapper>
      <NextLink href={`/individuals/${id}/${slugify(name)}`} passHref>
        <Link>
            <div>
              <SliderTitle>{name}</SliderTitle>
              <SliderList>
                <CardContent>{parse(info)}</CardContent>
              </SliderList>
            </div>
            <div>
              <SliderImg>
                {/* <Image src={Slider1} alt="slider-image" />
                 */}
                <img src={image} alt={name} />
                <SliderLink>Купить онлайн</SliderLink>
              </SliderImg>
            </div>
        </Link>
      </NextLink>
    </Wrapper>
  );
};

export default SliderCard;
