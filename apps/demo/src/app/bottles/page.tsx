import { RecommendationBottlePreview } from '@/models/bottle';
import { GET, getServerSideTokens, createInit } from '@/server';
import { Bottles } from './Bottles';

export interface RandomBottlesQuery {
  nextBottleLeftHours: number;
  randomBottles: RecommendationBottlePreview[];
}
export interface UserInfo {
  name: string;
}

export default async function BottlesPage() {
  const tokens = getServerSideTokens();

  const [bottles, userInfo] = await Promise.all([
    GET<RandomBottlesQuery>(`/api/v2/bottles/random`, tokens, createInit(tokens.accessToken)),
    GET<UserInfo>(`/api/v1/profile/info`, tokens, createInit(tokens.accessToken)),
  ]);

  return <Bottles bottles={bottles} userInfo={userInfo} />;
}
