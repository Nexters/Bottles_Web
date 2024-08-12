import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const tokenParams = `accessToken=${process.env.TEST_ACCESS_TOKEN}&refreshToken=${process.env.TEST_REFRESH_TOKEN}`;

test('Create Profile Funnel Flow', async ({ page }) => {
  await test.step('Set MBTI and move to step 2', async () => {
    await page.goto(`/create-profile?${tokenParams}`);

    const nextButtonText = page.getByText('다음');
    const EButton = page.getByRole('button', { name: 'E', exact: true });
    const SButton = page.getByRole('button', { name: 'S', exact: true });
    const FButton = page.getByRole('button', { name: 'F', exact: true });
    const JButton = page.getByRole('button', { name: 'J', exact: true });
    await EButton.click();
    await SButton.click();
    await FButton.click();
    await JButton.click();
    await nextButtonText.click();
    await page.waitForURL('**/create-profile?step=2');
  });
  await test.step('Select keywords and move to step 3', async () => {
    const nextButtonText = page.getByText('다음');
    const select1 = page.getByRole('button', { name: '예의바른', exact: true });
    const select2 = page.getByRole('button', { name: '재밌는', exact: true });
    const select3 = page.getByRole('button', { name: '솔직한', exact: true });
    const select4 = page.getByRole('button', { name: '여유로운', exact: true });

    await select1.click();
    await select2.click();
    await select3.click();
    await select4.click();
    await nextButtonText.click();
    await page.waitForURL('**/create-profile?step=3');
  });
  await test.step('Select interests and move to step 4', async () => {
    const nextButtonText = page.getByText('다음');
    const select1 = page.getByRole('button', { name: '공연 관람', exact: true });
    const select2 = page.getByRole('button', { name: '홈트', exact: true });
    const select3 = page.getByRole('button', { name: '자전거', exact: true });
    const select4 = page.getByRole('button', { name: '외국어', exact: true });

    await select1.click();
    await select2.click();
    await select3.click();
    await select4.click();
    await nextButtonText.click();
    await page.waitForURL('**/create-profile?step=4');
  });
  await test.step('Select job and move to step 5', async () => {
    const nextButtonText = page.getByText('다음');
    const jobSelect = page.getByRole('button', { name: '직장인', exact: true });

    await jobSelect.click();
    await nextButtonText.click();
    await page.waitForURL('**/create-profile?step=5');
  });
  await test.step('Go back to step4 and expect previous selected job button to be selected. Then, go to step5', async () => {
    const goBackButton = page.getByLabel('go-back-icon');
    await goBackButton.click();

    await page.waitForURL('**/create-profile?step=4');
    const jobSelect = page.getByRole('button', { name: '직장인', exact: true });
    expect(jobSelect).toHaveAttribute('aria-selected', 'true');

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();
    await page.waitForURL('**/create-profile?step=5');
  });
  await test.step('Select height and move to step6', async () => {
    const _169Select = page.getByLabel('169cm');
    await _169Select.click();

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();

    await page.waitForURL('**/create-profile?step=6');
  });
  // await test.step('Go back to step4 and expect previous selected job button to be selected. Then, go to step5', async () => {
  //   const _169Select = page.getByLabel('169cm');
  //   await _169Select.click();

  //   const nextButtonText = page.getByText('다음');
  //   await nextButtonText.click();

  //   await page.waitForURL('**/create-profile?step=7');
  // });
});
