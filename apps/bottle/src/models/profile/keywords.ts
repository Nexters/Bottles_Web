export const keywordList = [
  '다정한',
  '적극적인',
  '신중한',
  '활기찬',
  '열정적인',
  '예의바른',
  '자유로운',
  '단순한',
  '진지한',
  '애교있는',
  '재밌는',
  '쿨한',
  '차분한',
  '감성적인',
  '논리적인',
  '솔직한',
  '털털한',
  '눈치빠른',
  '여유로운',
  '매너좋은',
] as const;

export type Keyword = (typeof keywordList)[number];
