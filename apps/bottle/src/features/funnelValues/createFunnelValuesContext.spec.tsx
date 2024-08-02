import { render, renderHook } from '@testing-library/react';
import { createFunnelValuesContext } from './createFunnelValuesContext';

describe('createFunnelValuesContext', () => {
  it('creates context provider and consumes properly', () => {
    const [TestContext, useTestContext] = createFunnelValuesContext<{ name: string }>();

    const { result } = renderHook(() => useTestContext(), { wrapper: TestContext });

    result.current.setValue('name', 'taehwan');

    expect(result.current.getValues()).toMatchObject({ name: 'taehwan' });
  });

  it('can set multiple values with setValues function', () => {
    const [TestContext, useTestContext] = createFunnelValuesContext<{ name: string; age: number }>();

    const { result } = renderHook(() => useTestContext(), { wrapper: TestContext });

    result.current.setValues([
      { key: 'name', value: 'taehwan' },
      { key: 'age', value: 10 },
    ]);

    expect(result.current.getValues()).toMatchObject({ name: 'taehwan', age: 10 });
  });

  it('throw error when provider is not wrapped', () => {
    const [_, useTestContext] = createFunnelValuesContext<{ name: string }>();

    const Test = () => {
      useTestContext();
      return <div>test</div>;
    };

    expect(() => render(<Test />)).toThrowError('Wrap Funnel Context Provider');
  });
});
