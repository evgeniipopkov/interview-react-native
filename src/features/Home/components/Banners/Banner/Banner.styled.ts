import styled from 'theme/styled';
import { BannerSCProps } from './interfaces';

const Container = styled.View<BannerSCProps>`
  margin-right: ${({ index }) => (index ? 0 : 12)}px;
`;

export default Container;
