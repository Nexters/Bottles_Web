import { josa } from 'es-hangul';

const introCreateMapByQuestion: Record<number, (answer: string) => string> = {
  0: (answer: string) => `안녕하세요 ${answer}입니다.`,
  1: (answer: string) => `제 성격을 한 마디로 표현하자면 ${josa(answer, '이에요/예요')}.`,
  2: (answer: string) => `저는 제 주변인에게 ${josa(answer, '은/는')} 말을 많이 들어요.`,
  3: (answer: string) => `제 외모의 특징을 한가지 뽑자면 ${josa(answer, '이에요/예요')}.`,
  4: (answer: string) => `연애할 때는 ${answer} 스타일이에요.`,
  5: (answer: string) => `보틀에서는 ${josa(answer, '을/를')} 만나고 싶어요.`,
};

export function autoCreateIntroFromStoredAnswers(storedAnswers: [string, string, string, string, string, string]) {
  return Object.values(introCreateMapByQuestion).reduce((acc, value, index) => {
    return `${index === 0 ? acc : acc + ' '}` + value(storedAnswers[index] ?? '');
  }, '');
}
