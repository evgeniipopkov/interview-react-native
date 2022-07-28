import React from 'react';
import { View } from 'react-native';

import PlaceholderContainer, { styles } from './Placeholder.styled';

export default () => (
  <PlaceholderContainer>
    <View style={styles.image} />
  </PlaceholderContainer>
);
