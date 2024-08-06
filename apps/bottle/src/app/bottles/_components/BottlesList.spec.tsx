import { Bottle } from '@/features/query/useBottlesQuery';
import { stringifyKeywords } from './BottlesListItem';

it('stringifyKeywords', () => {
  const keyword = ['k1', 'k2', 'k3', 'k4'] as unknown as Bottle['keyword'];

  expect(stringifyKeywords(keyword)).toBe('k1, k2, k3');
});
