import { ProviderProps, createContext, useCallback, useContext, useRef } from 'react';

export interface FunnelValuesContext<I extends object> {
  setValue<K extends keyof I>(key: K, value: I[K]): void;
  getValues(): Partial<I>;
}

export function createFunnelValuesContext<I extends object>() {
  const Context = createContext<FunnelValuesContext<I> | null>(null);

  function Provider(props: Omit<ProviderProps<FunnelValuesContext<I> | null>, 'value'>) {
    const values = useRef<Partial<I>>({});
    const setValue = useCallback(<K extends keyof I>(key: K, value: I[K]) => {
      const prev = { ...values.current };
      values.current = {
        ...prev,
        [key]: value,
      };
    }, []);

    const getValues = useCallback(() => values.current, []);
    return <Context.Provider value={{ setValue, getValues }} {...props} />;
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
