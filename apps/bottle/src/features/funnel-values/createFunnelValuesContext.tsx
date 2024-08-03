import { ProviderProps, createContext, useCallback, useContext, useRef } from 'react';

export interface FunnelValuesContext<I extends object> {
  setValue<K extends keyof I>(key: K, value: I[K]): void;
  setValues<K extends keyof I>(newValues: { key: K; value: I[K] }[]): void;
  getValues(): Partial<I>;
  getValue<K extends keyof I>(key: K): I[K] | undefined;
}

export function createFunnelValuesContext<I extends object>() {
  const Context = createContext<FunnelValuesContext<I> | null>(null);

  function Provider({
    initial,
    ...props
  }: Omit<ProviderProps<FunnelValuesContext<I> | null> & { initial?: Partial<I> }, 'value'>) {
    const values = useRef<Partial<I>>(initial != null ? initial : {});
    const setValue = useCallback(<K extends keyof I>(key: K, value: I[K]) => {
      const prev = { ...values.current };
      values.current = {
        ...prev,
        [key]: value,
      };
    }, []);

    const setValues = useCallback(<K extends keyof I>(newValues: { key: K; value: I[K] }[]) => {
      const prev = { ...values.current };

      newValues.forEach(({ key, value }) => {
        prev[key] = value;
      });

      values.current = prev;
    }, []);

    const getValues = useCallback(() => values.current, []);

    const getValue = useCallback(<K extends keyof I>(key: K) => values.current[key], []);

    return <Context.Provider value={{ setValue, setValues, getValues, getValue }} {...props} />;
  }

  function useFunnelValues() {
    const funnelValuesContext = useContext(Context);

    if (funnelValuesContext == null) {
      throw new Error('Wrap Funnel Context Provider');
    }

    return funnelValuesContext;
  }

  return [Provider, useFunnelValues] as const;
}
