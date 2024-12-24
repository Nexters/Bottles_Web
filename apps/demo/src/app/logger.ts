'use client';

import { createLogger } from '@/logger';

export const [Logger, useLogger] = createLogger<[string, string, { value: string }]>({
  init: () => {
    console.log('INIT!!');
  },
  events: {
    onClick: params => {
      console.log('CLICKED!', params);
    },
  },
  mount: {
    onTrigger: params => {
      console.log('MOUNTED', params);
    },
  },
  impression: {
    onTrigger: params => {
      console.log('IMPRESSION', params);
    },
  },
});
