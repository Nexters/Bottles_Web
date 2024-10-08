export const culture = [
  '영화 · 드라마 정주행',
  '전시회 방문',
  '공연 관람',
  '음악 감상',
  '코인 노래방',
  '악기 연주',
  '사진 촬영',
  '드로잉',
] as const;

export const sports = [
  '헬스',
  '요가 · 필라테스',
  '홈트',
  '러닝',
  '수영',
  '등산',
  '클라이밍',
  '산책',
  '자전거',
  '스포츠 경기 시청',
  '축구',
  '야구',
  '농구',
  '크로스핏',
  '테니스',
  '춤',
  '볼링',
  '당구',
  '골프',
  '스키 · 스노보드',
  '서핑',
] as const;

export const entertainment = [
  '유튜브 시청',
  '만화 · 웹툰 정주행',
  '독서',
  '요리',
  '외국어',
  '식물 가꾸기',
  '게임',
  '낚시',
  '방탈출 게임',
] as const;

export const etc = ['여행', '카페 방문', '맛집 방문', '드라이브', '캠핑', '봉사'] as const;

export type Culture = (typeof culture)[number];
export type Sports = (typeof sports)[number];
export type Entertainment = (typeof entertainment)[number];
export type ETC = (typeof etc)[number];
