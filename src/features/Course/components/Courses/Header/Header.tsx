import React, { useState } from 'react';
import en from '../../../locales/en';

import {
  Tab,
  Tabs,
  Header,
  TabText,
  Container,
} from './Header.styled';

export default () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <Container>
      <Header>{en.headerList}</Header>
      <Tabs>
        {en.tabs.map((tab, idx) => {
          const isActive = idx === activeIdx;

          return (
            <Tab
              key={tab}
              isActive={isActive}
              onPress={() => setActiveIdx(idx)}
            >
              <TabText isActive={isActive}>{tab}</TabText>
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};
