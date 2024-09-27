import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { CurrentUser } from '@/models/user';

export function Introduction({
  initialValue,
  onNext,
  ctaButtonText,
}: BaseProfileComponentProps<CurrentUser['introduction']>) {
  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을\n소개를 작성해 주세요'}</ProfileLayout.Title>
      <ProfileLayout.FixedButton
        onClick={() => {
          onNext(introduction => {});
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
