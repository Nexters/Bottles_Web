import { Profile } from '@/models/profile';
import { isSameArray } from '.';

describe('isSameArray', () => {
  it('should return true when both array items are the same', () => {
    const keyword1 = ['a', 'b', 'c'] as unknown as Profile['keyword'];
    const keyword2 = ['b', 'c', 'a'] as unknown as Profile['keyword'];
    expect(isSameArray(keyword1, keyword2)).toBe(true);
  });

  it('should return false when length is different', () => {
    const keyword1 = ['a', 'b'] as unknown as Profile['keyword'];
    const keyword2 = ['a'] as unknown as Profile['keyword'];
    expect(isSameArray(keyword1, keyword2)).toBe(false);
  });
});
