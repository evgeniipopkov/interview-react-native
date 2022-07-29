import { ViewStyle } from 'react-native';
import { IChildren } from 'interfaces';

interface DefaultLayoutProps extends IChildren {
  header: string,
  styleHeader?: ViewStyle,
  showAvatar?: boolean,
  onPressBack?: () => void
}

interface DefaultLayoutSCProps {
  offset: number
}

export { DefaultLayoutProps, DefaultLayoutSCProps };
