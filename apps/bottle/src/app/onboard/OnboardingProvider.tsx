import { ReactNode, createContext, useCallback, useContext, useRef } from 'react';

interface OnboardingValues {
  mbti: string;
  keyword: string[];
  interest: {
    culture: string[];
    sports: string[];
    entertainment: string[];
    etc: string[];
  };
  height: number;
  job: string;
  smoking: string;
  alcohol: string;
  religion: string;
  region: {
    city: string;
    state: string;
  };
}

interface OnboardingContext {
  setValue<K extends keyof OnboardingValues>(key: K, value: OnboardingValues[K]): void;
}

const Onboarding = createContext<OnboardingContext | null>(null);

interface Props {
  children: ReactNode;
}

export function OnboardingProvider({ children }: Props) {
  const onboardingValues = useRef<Partial<OnboardingValues>>({});

  const setValue = useCallback(<K extends keyof OnboardingValues>(key: K, value: OnboardingValues[K]) => {
    const prev = { ...onboardingValues.current };
    onboardingValues.current = {
      ...prev,
      [key]: value,
    };

    console.log('values', onboardingValues.current);
  }, []);

  return <Onboarding.Provider value={{ setValue }}>{children}</Onboarding.Provider>;
}

export function useOnboardingValues() {
  const onboardingContext = useContext(Onboarding);

  if (onboardingContext == null) {
    throw new Error('Wrap Onboarding Provider');
  }

  return { setValue: onboardingContext.setValue };
}
