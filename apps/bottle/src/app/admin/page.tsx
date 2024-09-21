'use client';

import { Header } from '@/components/common/header';
import { POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Step } from '@/features/steps/StepContainer';
import { Button, spacings } from '@bottlesteam/ui';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <>
      <Header />
      <Step>
        <Step.Title style={{ margin: `${spacings.xl} 0` }}>{'뭐할래?'}</Step.Title>
        <Button
          size="md"
          variant="solid"
          onClick={async () => {
            try {
              await POST('/api/v1/admin/after-bottle-receive', getClientSideTokens());
              window.alert('차은우에게 보틀을 보냈어요!');
            } catch (error) {
              console.log('ERROR', error);
              window.alert('차은우에게 보틀을 보내는 데 실패했어요!');
            }
          }}
        >
          차은우에게 보틀 도착한 상태 만들기
        </Button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacings.md, marginTop: spacings.xl }}>
          <Link href={'/profile/create'}>
            <Button size="md" variant="outlined">
              프로필 생성 이동{' >'}
            </Button>
          </Link>
          <Link href={'/profile/edit'}>
            <Button size="md" variant="outlined">
              프로필 수정 이동{' >'}
            </Button>
          </Link>
          <Link href={'/bottles'}>
            <Button size="md" variant="outlined">
              도착한 보틀 이동{' >'}
            </Button>
          </Link>
        </div>
      </Step>
    </>
  );
}
