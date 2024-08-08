import { Profile } from '@/models/profile';
import { stringifyKeywords } from './BottlesListItem';

it('stringifyKeywords', () => {
  const keyword = ['k1', 'k2', 'k3', 'k4'] as unknown as Profile['keyword'];

  expect(stringifyKeywords(keyword)).toBe('k1, k2, k3');
});
