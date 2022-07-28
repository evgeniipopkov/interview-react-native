import { IChildren } from 'interfaces';

interface DefaultLayoutProps extends IChildren {
  header: string,
  showAvatar?: boolean,
  onPressBack?: () => void
}

interface DefaultLayoutSCProps {
  offset: number
}

export { DefaultLayoutProps, DefaultLayoutSCProps };
