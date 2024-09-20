export const alcoholList = ['한 방울도 마시지 않아요', '때에 따라 적당히 즐겨요', '자주 찾는 편이에요'] as const;

export const alcoholChipTextMap = {
  '술은 안해요': '한 방울도 마시지 않아요',
  '술은 적당히': '때에 따라 적당히 즐겨요',
  '술을 즐겨요': '자주 찾는 편이에요',
};

export type Alcohol = (typeof alcoholList)[number];
export type AlcoholChipText = keyof typeof alcoholChipTextMap;
