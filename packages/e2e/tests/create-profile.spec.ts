import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const tokenParams = `accessToken=${process.env.TEST_ACCESS_TOKEN}&refreshToken=${process.env.TEST_REFRESH_TOKEN}`;

console.log('[debug]', `?? + ${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);

test('Create Profile Funnel Basic Flow', async ({ page }) => {
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
  // await test.step('Go back to step4 and expect previous selected job button to be selected. Then, go to step5', async () => {
  //   const goBackButton = page.getByLabel('go-back-icon');
  //   await goBackButton.click();

  //   await page.waitForURL('**/create-profile?step=4');
  //   const jobSelect = page.getByRole('button', { name: '직장인', exact: true });
  //   expect(jobSelect).toHaveAttribute('aria-selected', 'true');

  //   const nextButtonText = page.getByText('다음');
  //   await nextButtonText.click();
  //   await page.waitForURL('**/create-profile?step=5');
  // });
  await test.step('Select height and move to step6', async () => {
    const _169Select = page.getByLabel('169cm');
    await _169Select.click();

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();

    await page.waitForURL('**/create-profile?step=6');
  });
  await test.step('Select smoking and move to step 7', async () => {
    const smokingSelect = page.getByRole('button', { name: '자주 피워요', exact: true });
    await smokingSelect.click();

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();

    await page.waitForURL('**/create-profile?step=7');
  });
  await test.step('Select alcohol and move to step 8', async () => {
    const alcoholSelect = page.getByRole('button', { name: '때에 따라 적당히 즐겨요', exact: true });
    await alcoholSelect.click();

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();

    await page.waitForURL('**/create-profile?step=8');
  });
  await test.step('Select religion and move to step 9', async () => {
    const religionSelect = page.getByRole('button', { name: '기독교', exact: true });
    await religionSelect.click();

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();

    await page.waitForURL('**/create-profile?step=9');
  });
  await test.step('Select region and move to step 10', async () => {
    const cityPlaceholder = page.getByText('전체 지역을 선택해 주세요');
    const statePlaceholder = page.getByText('상세 지역을 선택해 주세요');

    await cityPlaceholder.click();
    const city = page.getByRole('listitem').first();
    await city.click();
    const citySelectButton = page.getByRole('button', { name: '완료', exact: true });
    await citySelectButton.click();

    await statePlaceholder.click();
    const state = page.getByRole('listitem').first();
    await state.click();
    const stateSelectButton = page.getByRole('button', { name: '완료', exact: true });
    await stateSelectButton.click();

    const nextButtonText = page.getByText('다음');
    await nextButtonText.click();

    await page.waitForURL('**/create-profile?step=10');
  });
});

test('Previously selected values should be kept when going back between steps. ', async ({ page }) => {
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
  await test.step('ESFJ buttons should be selected default, if user goes back to step 1', async () => {
    const goBackButton = page.getByLabel('go-back-icon');
    await goBackButton.click();
    await page.waitForURL(`/create-profile`);
    const previouslySelectedButtons = [
      page.getByRole('button', { name: 'E', exact: true }),
      page.getByRole('button', { name: 'S', exact: true }),
      page.getByRole('button', { name: 'F', exact: true }),
      page.getByRole('button', { name: 'J', exact: true }),
    ];

    previouslySelectedButtons.forEach(button => {
      expect(button).toHaveAttribute('aria-selected', 'true');
    });
  });
});
