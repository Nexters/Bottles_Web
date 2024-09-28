import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { CurrentUser } from '@/models/user';

export function Images({ ctaButtonText }: BaseProfileComponentProps<CurrentUser['imageUrl']>) {
  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을 나의\n사진을 골라주세요'}</ProfileLayout.Title>
      <ProfileLayout.FixedButton onClick={() => {}}>{ctaButtonText}</ProfileLayout.FixedButton>
    </>
  );
}
