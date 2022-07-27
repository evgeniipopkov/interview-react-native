import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'theme/styled';

export default styled(SafeAreaView).attrs({
  edges: ['bottom', 'left', 'right'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
