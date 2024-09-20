export const smokingList = ['전혀 피우지 않아요', '가끔 피워요', '자주 피워요'] as const;

export const smokingChipTextMap = {
  '흡연 안해요': '한 방울도 마시지 않아요',
  '흡연은 가끔': '때에 따라 적당히 즐겨요',
  흡연해요: '자주 찾는 편이에요',
};

export type Smoking = (typeof smokingList)[number];
export type SmokingChipText = keyof typeof smokingChipTextMap;
