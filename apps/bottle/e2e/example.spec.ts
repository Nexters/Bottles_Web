import { Tokens } from '@/features/server/auth';
import { test } from '@playwright/test';

const testTokens = {
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzIzMzQ5NjQwLCJleHAiOjE3MjMzODU2NDB9.BISDJ_bHuHOgs06Hm12jP2lkOl6T2N6kWz1agyz9rkA',
  refreshToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzIzMzQ5NjQwLCJleHAiOjE3Mzc4NjQ4NDB9.3q-yteKL6bSMyEXcyLSgL7A8XlcGG5oQJdqSFpiPdBc',
};

function createTokenParams(tokens: Tokens) {
  return `accessToken=${tokens.accessToken}&refreshToken=${tokens.refreshToken}`;
}

test('Create Profile Funnel Flow', async ({ page }) => {
  await test.step('Set MBTI and move to step 2', async () => {
    await page.goto(`/create-profile?${createTokenParams(testTokens)}`);

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
  await test.step('Set MBTI and move to step 2', async () => {
    await page.goto(`/create-profile?${createTokenParams(testTokens)}`);

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
});
