'use client';

import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useAcceptBottleMutation } from '@/store/mutation/useAcceptBottleMutation';
import { useRefuseBottleMutation } from '@/store/mutation/useRefuseBottleMutation';
import { CTAButton, FixedBottomCTAButton } from '@bottlesteam/ui';
import { overlay } from 'overlay-kit';
import { ExpressInterestBottomSheet } from './ExpressInterestBottomSheet';
import { BottleType } from './page';

interface Props {
  type: BottleType;
  id: number;
}

export function ActionButtons({ type, id }: Props) {
  const { send } = useAppBridge();

  const { mutateAsync: accept } = useAcceptBottleMutation(type, id);
  const { mutateAsync: refuse } = useRefuseBottleMutation(id);

  const handleRightClick =
    type === 'recommendation'
      ? () => {
          overlay.open(({ isOpen, unmount }) => (
            <ExpressInterestBottomSheet
              isOpen={isOpen}
              onClose={unmount}
              onExpress={async likeMessage => {
                await accept(likeMessage);
                send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
              }}
            />
          ));
        }
      : async () => {
          await accept(null);
          send({ type: AppBridgeMessageType.BOTTLE_ACCEPT });
        };

  return (
    <FixedBottomCTAButton
      variant="two"
      left={
        <CTAButton.Left
          onClick={async () => {
            await refuse();
            send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
          }}
        >
          떠내려 보내기
        </CTAButton.Left>
      }
      right={
        <CTAButton.Right onClick={handleRightClick}>
          {type !== 'sent' ? '호감 표현하기' : '문답 시작하기'}
        </CTAButton.Right>
      }
    />
  );
}
