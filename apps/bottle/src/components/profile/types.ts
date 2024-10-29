export interface BaseProfileComponentProps<T, V extends T = T> {
  initialValue?: T;
  ctaButtonText?: string;
  onNext: (value: V) => void | Promise<void>;
}
