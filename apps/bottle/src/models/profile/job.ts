export const jobList = ['대학생 · 대학원생', '직장인', '프리랜서', '자영업', '취준생 · 무직'] as const;
export type Job = (typeof jobList)[number];
