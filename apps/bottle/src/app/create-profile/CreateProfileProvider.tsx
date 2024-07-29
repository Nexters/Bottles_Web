import { ReactNode, createContext, useCallback, useContext, useRef } from 'react';

interface CreateProfileValues {
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

interface CreateProfileContext {
  setValue<K extends keyof CreateProfileValues>(key: K, value: CreateProfileValues[K]): void;
  getValues(): Partial<CreateProfileValues>;
}

const CreateProfile = createContext<CreateProfileContext | null>(null);

interface Props {
  children: ReactNode;
}

export function CreateProfileProvider({ children }: Props) {
  const onboardingValues = useRef<Partial<CreateProfileValues>>({});

  const setValue = useCallback(<K extends keyof CreateProfileValues>(key: K, value: CreateProfileValues[K]) => {
    const prev = { ...onboardingValues.current };
    onboardingValues.current = {
      ...prev,
      [key]: value,
    };
  }, []);

  const getValues = useCallback(() => onboardingValues.current, []);

  return <CreateProfile.Provider value={{ setValue, getValues }}>{children}</CreateProfile.Provider>;
}

export function useCreateProfileValues() {
  const createProfileContext = useContext(CreateProfile);

  if (createProfileContext == null) {
    throw new Error('Wrap Create Profile Provider');
  }

  return createProfileContext;
}
