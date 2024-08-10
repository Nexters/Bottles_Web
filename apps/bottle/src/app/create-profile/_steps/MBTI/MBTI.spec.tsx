import { StepProvider } from '@/features/steps/StepProvider';
import { userInfoQueryOptions } from '@/store/query/useNameQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { CreateProfileProvider } from '../../CreateProfileProvider';
import { MBTI } from '.';

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: vi.fn() }),
  useRouter: () => ({ push: vi.fn() }),
}));

it('sets previous selected MBTI to initial state for each mbti selections', async () => {
  const testClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
      },
    },
  });
  testClient.setQueryData(userInfoQueryOptions({ accessToken: '', refreshToken: '' }).queryKey, { name: 'taehwan' });

  const MBTIRender = () => (
    <QueryClientProvider client={testClient}>
      <CreateProfileProvider initial={{ mbti: 'ESFJ' }}>
        <StepProvider maxStep={9} uri={'/test'}>
          <MBTI />
        </StepProvider>
      </CreateProfileProvider>
    </QueryClientProvider>
  );

  const screen = render(<MBTIRender />);
  const EButton = screen.getByText('E');
  const nextButton = screen.getByText('다음');

  expect(EButton).toHaveAttribute('aria-selected', 'true');
  expect(nextButton).not.toBeDisabled();
});
