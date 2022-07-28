type StackType = {
  [propName: string]: unknown
}

type PresentationType = 'modal'
  | 'transparentModal'
  | 'containedModal'
  | 'containedTransparentModal'
  | 'fullScreenModal'
  | 'formSheet'
  | 'card'
  | undefined

interface StackProps<T> {
  name: keyof T,
  component: ({ navigation }: NativeStackScreenProps<T>) => JSX.Element,
  presentation?: PresentationType
}

export { StackType, StackProps };
