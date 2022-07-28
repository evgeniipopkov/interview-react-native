import React from 'react';
import { View } from 'react-native';

import PlaceholderContainer, { styles } from './Placeholder.styled';

export default () => (
  <PlaceholderContainer>
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.info}>
        <View style={styles.name} />
        <View style={styles.speaker} />
        <View style={styles.specs} />
      </View>
    </View>
  </PlaceholderContainer>
);
