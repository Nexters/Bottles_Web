import { renderHook } from '@testing-library/react';
import { CreateProfileProvider, useCreateProfileValues } from './CreateProfileProvider';

describe('Create Profile', () => {
  it('sets correct target value', () => {
    const MBTI = 'CUTE';

    const { result } = renderHook(() => useCreateProfileValues(), { wrapper: CreateProfileProvider });
    result.current.setValue('mbti', MBTI);
    expect(result.current.getValues().mbti).toBe(MBTI);
  });
});
