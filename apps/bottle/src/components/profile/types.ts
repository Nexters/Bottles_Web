export interface BaseProfileComponentProps<T> {
  initialValue?: T;
  ctaButtonText?: string;
  onNext: (value: T) => void | Promise<void>;
}
