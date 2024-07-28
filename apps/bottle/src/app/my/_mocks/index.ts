import { Profile } from '../fetchProfile';

export const noIntroProfile: Profile = {
  userName: '테스트',
  age: 20,
  introduction: [],
  profileSelect: {
    mbti: 'ENTJ',
    keyword: ['다정한', '적극적인', '쿨한', '솔직한'],
    interest: {
      culture: ['드로잉'],
      sports: ['헬스', '러닝'],
      entertainment: ['독서'],
      etc: ['여행'],
    },
    job: '직장',
    smoking: '술은 안해요',
    alcohol: '한 방울도 마시지 않아요',
    religion: '무교',
    region: {
      city: '서울특별시',
      state: '송파구',
    },
  },
};

export const profile: Profile = {
  userName: '테스트',
  age: 20,
  introduction: [
    {
      question: '나만의 특징',
      answer:
        '밝고 긍정적인 성격이에요. 반려견과 산책하거나 주말에 베이킹을 하며 스트레스를 풀곤 해요. 사람들과 소통하는 걸 좋아하지만, 혼자만의 시간도 중요하게 생각해요. 작은 행복을 찾으며 여유롭게 지내고 있어요.',
    },
    {
      question: '직업.직무',
      answer: 'IT 기업에서 3년차 프로덕트 디자이너로 일하고 있어요',
    },
    {
      question: '선호하는 스타일',
      answer: '어른스러운 분이면 좋을거 같아요! 상대방의 개인 시간을 존중해주면 좋겠습니다.',
    },
  ],
  profileSelect: {
    mbti: 'ENTJ',
    keyword: ['다정한', '적극적인', '쿨한', '솔직한'],
    interest: {
      culture: ['드로잉'],
      sports: ['헬스', '러닝'],
      entertainment: ['독서'],
      etc: ['여행'],
    },
    job: '직장',
    smoking: '술은 안해요',
    alcohol: '한 방울도 마시지 않아요',
    religion: '무교',
    region: {
      city: '서울특별시',
      state: '송파구',
    },
  },
};
