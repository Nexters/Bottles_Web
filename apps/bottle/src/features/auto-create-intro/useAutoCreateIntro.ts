import { keyMap } from '../bottle-storage/bottleStorage';
import { useGetBottleStorage } from '../bottle-storage/useGetBottleStorage';
import { autoCreateIntroFromStoredAnswers } from './autoCreateIntro';

export type Answers = [string, string, string, string, string, string];

export function useAutoCreatedIntro() {
  const storedAnswers = useGetBottleStorage<Answers>(keyMap.introAnswers);

  return storedAnswers == null ? undefined : autoCreateIntroFromStoredAnswers(storedAnswers);
}
