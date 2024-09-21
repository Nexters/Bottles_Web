import { renderHook } from '@testing-library/react';
import { STEP_PARAM_KEY, useFunnel } from '.';

const pushFn = vi.fn();
vi.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: () => 1 }),
  useRouter: () => ({ push: pushFn }),
}));

const TEST_ENDPOINT = 'test';

describe('useFunnel', () => {
  it('should set value properly and can get correct value', () => {
    const { result } = renderHook(() => useFunnel(TEST_ENDPOINT));
    result.current.setValue('a', 1);
    expect(result.current.getValue('a')).toBe(1);
    expect(result.current.getValues()).toStrictEqual({ a: 1 });
  });
  it('should set value properly and should push new route to next step when onNextStep is called', () => {
    const { result } = renderHook(() => useFunnel(TEST_ENDPOINT));
    result.current.onNextStep('a', 1);
    expect(pushFn).toHaveBeenCalledWith(`${TEST_ENDPOINT}?${STEP_PARAM_KEY}=2`);
  });
});
