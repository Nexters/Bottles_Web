export interface BaseFunnelComponentProps<T> {
  initialValue?: T;
  ctaButtonText?: string;
  onNext: (value: T) => void | Promise<void>;
}
