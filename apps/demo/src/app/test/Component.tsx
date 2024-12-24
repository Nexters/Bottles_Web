'use client';

import { useLogger } from '../logger';

export function Component() {
  const { logger } = useLogger();

  return <div onMouseEnter={() => logger.events.onClick?.(['event', 'test', { value: 'example' }])}>hi</div>;
}
