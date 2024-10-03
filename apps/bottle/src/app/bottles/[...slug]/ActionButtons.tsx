'use client';

import { useAcceptBottleMutation } from '@/store/mutation/useAcceptBottleMutation';
import { useRefuseBottleMutation } from '@/store/mutation/useRefuseBottleMutation';
import { CTAButton, FixedBottomCTAButton } from '@bottlesteam/ui';
import { overlay } from 'overlay-kit';
import { BottleType } from '../Bottles';
import { ExpressInterestBottomSheet } from './ExpressInterestBottomSheet';

interface Props {
  type: BottleType;
  id: number;
}

export function ActionButtons({ type, id }: Props) {
  const { mutate: accept } = useAcceptBottleMutation(type, id);
  const { mutate: refuse } = useRefuseBottleMutation(id);

  const handleRightClick =
    type === 'random'
      ? () => {
          overlay.open(({ isOpen, unmount }) => (
            <ExpressInterestBottomSheet
              isOpen={isOpen}
              onClose={unmount}
              onExpress={likeMessage => accept(likeMessage)}
            />
          ));
        }
      : () => accept(null);

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
