'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';

interface StepContext {
  currentStep: number;
  onNextStep(): void;
  onPreviousStep(): void;
}

const Step = createContext<StepContext | null>(null);

interface Props {
  children: ReactNode;
}

const STEP_PARAM_KEY = 'step';
const MAX_STEP = 9;

export function StepProvider({ children }: Props) {
  const searchParams = useSearchParams();
  const step = useMemo(() => Number(searchParams.get(STEP_PARAM_KEY) ?? '1'), [searchParams]);
  const router = useRouter();

  const onNextStep = useCallback(() => {
    if (step < MAX_STEP) router.push(`/onboard?step=${step + 1}`);
  }, [step, router]);

  const onPreviousStep = useCallback(() => {
    if (step > 1) router.push(`/onboard?step=${step - 1}`);
  }, [step, router]);

  return <Step.Provider value={{ onNextStep, currentStep: step, onPreviousStep }}>{children}</Step.Provider>;
}

export function useStep() {
  const stepValues = useContext(Step);
  if (stepValues == null) {
    throw new Error('Wrap Step Provider');
  }

  return stepValues;
}
