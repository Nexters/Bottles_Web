'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';

interface StepContext {
  currentStep: number;
  onNextStep(): void;
  onPreviousStep(): void;
}

const Step = createContext<StepContext | null>(null);

interface StepProviderProps {
  maxStep: number;
  uri: string;
  children: ReactNode;
}

const STEP_PARAM_KEY = 'step';

export function StepProvider({ children, maxStep, uri }: StepProviderProps) {
  const searchParams = useSearchParams();
  const step = useMemo(() => Number(searchParams.get(STEP_PARAM_KEY) ?? '1'), [searchParams]);
  const router = useRouter();

  const onNextStep = useCallback(() => {
    if (step < maxStep) router.push(`${uri}?${STEP_PARAM_KEY}=${step + 1}`);
  }, [step, router, maxStep, uri]);

  const onPreviousStep = useCallback(() => {
    if (step > 1) router.push(`${uri}?${STEP_PARAM_KEY}=${step - 1}`);
  }, [step, router, uri]);

  return <Step.Provider value={{ onNextStep, currentStep: step, onPreviousStep }}>{children}</Step.Provider>;
}

export function useStep() {
  const stepValues = useContext(Step);
  if (stepValues == null) {
    throw new Error('Wrap Step Provider');
  }

  return stepValues;
}
