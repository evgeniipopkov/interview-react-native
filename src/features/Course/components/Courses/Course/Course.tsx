import React, { useEffect, useState } from 'react';

import source1 from '../../../../../assets/images/courseImage1.png';
import source2 from '../../../../../assets/images/courseImage2.png';
import source3 from '../../../../../assets/images/courseImage3.png';
import source4 from '../../../../../assets/images/courseImage4.png';
import source5 from '../../../../../assets/images/courseImage5.png';
import source6 from '../../../../../assets/images/courseImage6.png';

import en from '../../../locales/en';
import PlaceholderImage from '../Placeholder/PlaceholderImage';

import { CourseProps } from './interfaces';
import { SpeakerIcon } from '../../../images';

import {
  Name,
  Price,
  Hours,
  Image,
  Speaker,
  Container,
  InfoWrapper,
  HoursWrapper,
  SpecsWrapper,
  SpeakerWrapper,
} from './Course.styled';

const getImage = (idx: number) => {
  switch (idx) {
    case 0: return source1;
    case 1: return source2;
    case 2: return source3;
    case 3: return source4;
    case 4: return source5;
    case 5: return source6;
    default: return source1;
  }
};

export default ({
  item: {
    name,
    price,
    hours,
    speaker,
    idxImage,
  },
}: CourseProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <Container>
      {isLoading && <PlaceholderImage />}
      <Image isLoading={isLoading} source={getImage(idxImage)} />
      <InfoWrapper>
        <Name>{name}</Name>
        <SpeakerWrapper>
          <SpeakerIcon />
          <Speaker>{speaker}</Speaker>
        </SpeakerWrapper>
        <SpecsWrapper>
          <Price>{`$${price}`}</Price>
          <HoursWrapper>
            <Hours>{`${hours} ${en.hours}`}</Hours>
          </HoursWrapper>
        </SpecsWrapper>
      </InfoWrapper>
    </Container>
  );
};
