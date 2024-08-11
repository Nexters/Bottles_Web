import { Step } from '@/features/steps/StepProvider';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Agreement } from '.';

describe('Agreement', () => {
  beforeEach(() => {
    render(
      <Step.Provider value={{ currentStep: 1, onNextStep: vi.fn(), onPreviousStep: vi.fn() }}>
        <Agreement />
      </Step.Provider>
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
    const privacyPolicy = screen.getByLabelText(/개인정보처리방침/g);
    const termsOfService = screen.getByLabelText(/보틀이용약관/g);
    await userEvent.click(privacyPolicy);
    await userEvent.click(termsOfService);

    const agreeAllItem = screen.getByLabelText('전체 동의하기');
    expect(agreeAllItem).toBeChecked();
  });
});
