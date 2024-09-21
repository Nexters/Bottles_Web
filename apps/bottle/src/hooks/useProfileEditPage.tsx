import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { convertProfileSelectToProfile } from '@/utils';
import { useRouter } from 'next/navigation';

export function useProfileEditPage() {
  const router = useRouter();
  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate: edit } = useProfileMutation({ type: 'edit' });

  const profile = convertProfileSelectToProfile(profileSelect);

  return { goBack: router.back, kakaoId, edit, profile };
}
