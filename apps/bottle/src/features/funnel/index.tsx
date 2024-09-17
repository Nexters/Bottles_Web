import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useRef } from 'react';

const STEP_PARAM_KEY = 'step';

export function useFunnel<V extends Record<string, any>>(uri: string, initialValues?: Partial<V>) {
  const valuesRef = useRef<Partial<V>>(initialValues ?? {});

  const setValue = useCallback(<K extends keyof V>(key: K, value: V[K]) => {
    const prev = { ...valuesRef.current };
    valuesRef.current = {
      ...prev,
      [key]: value,
    };
  }, []);

  const setValues = useCallback(<K extends keyof V>(newValues: { key: K; value: V[K] }[]) => {
    const prev = { ...valuesRef.current };

    newValues.forEach(({ key, value }) => {
      prev[key] = value;
    });

    valuesRef.current = prev;
  }, []);

  const getValues = useCallback(() => valuesRef.current, []);

  const searchParams = useSearchParams();
  const step = useMemo(() => Number(searchParams.get(STEP_PARAM_KEY) ?? '1'), [searchParams]);
  const router = useRouter();

  const onNextStep = useCallback(
    <K extends keyof V>(...args: [K, V[K]] | []) => {
      if (args[0] != null && args[1] != null) setValue(args[0], args[1]);
      router.push(`${uri}?${STEP_PARAM_KEY}=${step + 1}`);
    },
    [step, router, uri, setValue]
  );

  const onPreviousStep = useCallback(() => {
    router.push(`${uri}?${STEP_PARAM_KEY}=${step - 1}`);
  }, [step, router, uri]);

  return {
    setValue,
    setValues,
    values: getValues(),
    currentStep: step,
    onNextStep,
    onPreviousStep,
  };
}
