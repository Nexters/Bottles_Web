import { Bottle } from '@/models/bottle';
import { GET, getServerSideTokens, createInit } from '@/server';
import { UserAgentProvider } from '@bottlesteam/utils';
import { BottleDetail } from './BottleDetail';

export default async function BottlePage({ params: { id } }: { params: { id: number } }) {
  const tokens = getServerSideTokens();

  const bottleDetail = await GET<Bottle>(`/api/v1/bottles/${id}`, tokens, createInit(tokens.accessToken));

  return (
    <UserAgentProvider>
      <BottleDetail bottleDetail={bottleDetail} />
    </UserAgentProvider>
  );
}
