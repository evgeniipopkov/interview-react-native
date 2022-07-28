import { StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styled from 'theme/styled';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    marginLeft: 35,
  },
  name: {
    width: 150,
    height: 18,
    borderRadius: 10,
  },
  speaker: {
    width: 150,
    height: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  specs: {
    width: 75,
    height: 16,
    borderRadius: 10,
  },
});

export default styled(SkeletonPlaceholder).attrs(({ theme }) => ({
  speed: 400,
  highlightColor: theme.colors.white,
  backgroundColor: theme.colors.brightGray,
}))``;
