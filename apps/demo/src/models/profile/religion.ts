export const religionList = ['무교', '기독교', '천주교', '불교', '기타'] as const;
export type Religion = (typeof religionList)[number];
