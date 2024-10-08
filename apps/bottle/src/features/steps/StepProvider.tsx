'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';

interface StepContext {
  currentStep: number;
  onNextStep(): void;
  onPreviousStep(): void;
  onComplete?(): void;
}

export const Step = createContext<StepContext | null>(null);

interface StepProviderProps {
  maxStep: number;
  uri: string;
  children: ReactNode;
  onExit?: () => void;
  onComplete?: () => void;
}

const STEP_PARAM_KEY = 'step';

/**
 * @deprecated
 */
export function StepProvider({ children, maxStep, uri, onExit, onComplete }: StepProviderProps) {
  const searchParams = useSearchParams();
  const step = useMemo(() => Number(searchParams.get(STEP_PARAM_KEY) ?? '1'), [searchParams]);
  const router = useRouter();

  const onNextStep = useCallback(() => {
    if (step < maxStep) router.push(`${uri}?${STEP_PARAM_KEY}=${step + 1}`);
  }, [step, router, maxStep, uri]);

  const onPreviousStep = useCallback(() => {
    if (step > 1) {
      router.push(`${uri}?${STEP_PARAM_KEY}=${step - 1}`);
    } else {
      onExit?.();
    }
  }, [step, router, uri, onExit]);

  return (
    <Step.Provider value={{ onNextStep, currentStep: step, onPreviousStep, onComplete }}>{children}</Step.Provider>
  );
}

export function useStep() {
  const stepValues = useContext(Step);
  if (stepValues == null) {
    throw new Error('Wrap Step Provider');
  }

  return stepValues;
}
