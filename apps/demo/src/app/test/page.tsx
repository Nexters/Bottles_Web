import { Paragraph } from '@bottlesteam/ui';
import { LoggerImpression, LoggerProvider } from '../LoggerProvider';
import { Component } from './Component';

export default function TestPage() {
  return (
    <LoggerProvider>
      <div style={{ height: 300, width: 1000, overflow: 'scroll', backgroundColor: 'red' }}>
        <div style={{ height: 500, width: 200 }} />
        <LoggerImpression params={['event', 'kakao_login', { value: '카카오 로그인 버튼 클릭' }]}>
          <Paragraph color="white100" typography="t2">
            {'진심을 담은 보틀로\n서로를 밀도있게 알아가요  '}
          </Paragraph>
        </LoggerImpression>
      </div>
      <Component />
    </LoggerProvider>
  );
}
