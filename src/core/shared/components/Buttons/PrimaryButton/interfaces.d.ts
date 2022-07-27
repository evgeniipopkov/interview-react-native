import { IChildren } from 'interfaces';

export interface PrimaryButtonProps extends IChildren {
  width?: number,
  onPress: () => void
}
