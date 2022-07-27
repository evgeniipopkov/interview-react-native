import { IChildren } from 'interfaces';

interface PrimaryButtonProps extends IChildren {
  width?: number,
  disabled?: boolean,
  onPress: () => void
}

interface PrimaryButtonSCProps {
  width: number,
}

export { PrimaryButtonProps, PrimaryButtonSCProps };
