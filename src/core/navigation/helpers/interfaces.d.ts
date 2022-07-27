type StackType = {
  [propName: string]: unknown
}

export interface StackProps<T> {
  name: keyof T,
  component: ({ navigation }: NativeStackScreenProps<T>) => JSX.Element
}

export { StackType, StackProps };
