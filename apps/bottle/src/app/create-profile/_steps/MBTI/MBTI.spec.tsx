import { StepProvider } from '@/features/steps/StepProvider';
import { render } from '@testing-library/react';
import { CreateProfileProvider } from '../../CreateProfileProvider';
import { MBTI } from '.';

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: vi.fn() }),
  useRouter: () => ({ push: vi.fn() }),
}));

it('sets previous selected MBTI to initial state for each mbti selections', async () => {
  const MBTIRender = () => (
    <CreateProfileProvider initial={{ mbti: 'ESFJ' }}>
      <StepProvider maxStep={9} uri={'/test'}>
        <MBTI />
      </StepProvider>
    </CreateProfileProvider>
  );

  const screen = render(<MBTIRender />);
  const EButton = screen.getByText('E');
  const nextButton = screen.getByText('다음');

  expect(EButton).toHaveAttribute('aria-selected', 'true');
  expect(nextButton).not.toBeDisabled();
});
