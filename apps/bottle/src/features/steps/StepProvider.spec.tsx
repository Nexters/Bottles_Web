import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { StepProvider, useStep } from './StepProvider';

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: () => 1 }),
  useRouter: () => ({ push: vi.fn() }),
}));

describe('StepProvider', () => {
  it('calls onExit when onPrevious is called on the first step', () => {
    const onExitFn = vi.fn();
    const { result } = renderHook(() => useStep(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <StepProvider uri="/test" maxStep={5} onExit={onExitFn}>
          {children}
        </StepProvider>
      ),
    });

    result.current.onPreviousStep();

    expect(onExitFn).toHaveBeenCalled();
  });
});
