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

  it('can get a single value with getValue function, and returns undefined when value is not assigned', () => {
    const [TestContext, useTestContext] = createFunnelValuesContext<{ name: string; age: number }>();

    const { result } = renderHook(() => useTestContext(), { wrapper: TestContext });

    result.current.setValue('name', 'taehwan');

    expect(result.current.getValue('name')).toBe('taehwan');
    expect(result.current.getValue('age')).toBe(undefined);
  });

  it('can set initial values with initial prop for the provider', () => {
    const [TestContext, useTestContext] = createFunnelValuesContext<{ name: string; age: number }>();

    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <TestContext initial={{ name: 'taehwan' }}>{children}</TestContext>
      ),
    });
    expect(result.current.getValue('name')).toBe('taehwan');
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
