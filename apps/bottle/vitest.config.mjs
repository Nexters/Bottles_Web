import baseConfig from '@bottlesteam/vitest-config/vitest.config';
import { mergeConfig, defineConfig } from 'vitest/config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {},
  })
);
