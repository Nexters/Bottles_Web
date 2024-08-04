import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useFetch } from './useFetch';

const fetchFn = vi.fn();

describe('useFetch', () => {
  it('should return fetched data', async () => {
    fetchFn.mockReturnValueOnce(() => ({
      data: 'data',
    }));
    const { result } = renderHook(() => useFetch(fetchFn));

    act(async () => {
      expect(fetchFn).toHaveBeenCalledOnce();
      await vi.waitFor(() => {
        expect(result.current).toMatchObject({ data: 'data' });
      });
    });
  });

  it('should throw error when fetchFn throws error', async () => {
    const fetchFn = vi.fn().mockRejectedValueOnce(new Error(''));

    act(async () => {
      const { result } = renderHook(() => useFetch(fetchFn));

      await vi.waitFor(() => {
        expect(result.current).toThrowError();
      });
    });
  });
});
