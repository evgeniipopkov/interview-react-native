import { IChildren } from 'interfaces';

interface DefaultLayoutProps extends IChildren {
  header: string,
  onPressBack?: () => void
}

interface DefaultLayoutSCProps {
  offset: number
}

export { DefaultLayoutProps, DefaultLayoutSCProps };
