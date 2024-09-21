export const smokingList = ['전혀 피우지 않아요', '가끔 피워요', '자주 피워요'] as const;

export const smokingTextMap: Record<SmokingChipText, Smoking> = {
  '흡연 안해요': '전혀 피우지 않아요',
  '흡연은 가끔': '가끔 피워요',
  흡연해요: '자주 피워요',
};

export type Smoking = (typeof smokingList)[number];
export type SmokingChipText = '흡연 안해요' | '흡연은 가끔' | '흡연해요';
