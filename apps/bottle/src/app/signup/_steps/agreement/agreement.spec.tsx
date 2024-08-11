import { Step } from '@/features/steps/StepProvider';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Agreement } from '.';
import { AppBridgeContext } from '@/features/app-bridge/AppBridgeProvider';

describe('Agreement', () => {
  beforeEach(() => {
    render(
      <AppBridgeContext.Provider value={{ send: vi.fn() }}>
        <Step.Provider value={{ currentStep: 1, onNextStep: vi.fn(), onPreviousStep: vi.fn() }}>
          <Agreement />
        </Step.Provider>
      </AppBridgeContext.Provider>
    );
  });

  it('renders page with next button disabled', () => {
    const nextButton = screen.getByText('다음');
    expect(nextButton).toBeDisabled();
  });

  it('can agree all terms at once with AgreeAllItem check', async () => {
    const agreeAllItem = screen.getByLabelText('전체 동의하기');
    await userEvent.click(agreeAllItem);

    const nextButton = screen.getByText('다음');
    expect(nextButton).not.toBeDisabled();
  });

  it('AgreeAllItem will be checked if all of individual items are checked', async () => {
    const items = screen.getAllByText('[필수]');
    for (const item of items) {
      await userEvent.click(item);
    }
    const agreeAllItem = screen.getByLabelText('전체 동의하기');
    expect(agreeAllItem).toBeChecked();
  });
});
