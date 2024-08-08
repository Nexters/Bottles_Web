export const smokingList = ['전혀 피우지 않아요', '가끔 피워요', '자주 피워요'] as const;
export type Smoking = (typeof smokingList)[number];
