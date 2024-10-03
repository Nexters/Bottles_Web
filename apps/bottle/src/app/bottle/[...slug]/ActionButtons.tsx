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
  const { mutate: refuse } = useRefuseBottleMutation(id);

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
      : () => {
          accept(null);
        };

  return (
    <FixedBottomCTAButton
      variant="two"
      left={<CTAButton.Left onClick={() => refuse()}>떠내려 보내기</CTAButton.Left>}
      right={
        <CTAButton.Right onClick={handleRightClick}>
          {type !== 'sent' ? '호감 표현하기' : '문답 시작하기'}
        </CTAButton.Right>
      }
    />
  );
}
