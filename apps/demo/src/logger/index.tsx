'use client';

import { Children, cloneElement, createContext, isValidElement, ReactNode, useContext, useEffect } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useMergeRefs } from './useMergeRefs';

export interface ImpressionOptions {
  // TODO: add options
}
export interface MountOptions {
  // TODO: add options
}

export interface LoggerConfig<P extends Object[]> {
  init?: () => void;
  events: {
    impression?: (params: P) => void;
    onClick?: (params: P) => void;
    mount?: (params: P) => void;
  };
  impression?: {
    onTrigger: (params: P) => void;
    options?: ImpressionOptions;
  };
  mount?: {
    onTrigger: (params: P) => void;
    options?: MountOptions;
  };
  // TODO: add other events
}

export interface LoggerContextProps<P extends Object[] = []> {
  logger: LoggerConfig<P>;
  params: P;
}

export const createLogger = <P extends Object[] = []>(config: LoggerConfig<P>) => {
  const LoggerContext = createContext<null | LoggerContextProps<P>>(null);

  const useLogger = () => {
    const context = useContext(LoggerContext);
    if (context === null) {
      throw new Error('useLogger must be used within a LoggerProvider');
    }
    return context;
  };

  if (config.init !== undefined) {
    config.init();
  }

  const LoggerProvider = ({ children }: { children: ReactNode }) => {
    const params = [] as unknown as P;
    return <LoggerContext.Provider value={{ params, logger: config }}>{children}</LoggerContext.Provider>;
  };

  const Click = ({ children, params }: { children: ReactNode; params: P }) => {
    const child = Children.only(children);
    const { logger } = useLogger();

    return (
      isValidElement<{ onClick?: (...args: any[]) => void }>(child) &&
      cloneElement(child, {
        onClick: (...args: any[]) => {
          if (logger.events.onClick !== undefined) {
            logger.events.onClick(params);
          }
          if (child.props && typeof child.props['onClick'] === 'function') {
            return child.props['onClick'](...args);
          }
        },
      })
    );
  };

  const Impression = ({
    children,
    params,
    // options,
  }: {
    children: ReactNode;
    params: P;
    // options: ImpressionOptions;
  }) => {
    const { logger } = useLogger();
    const { isIntersecting, ref: impressionRef } = useIntersectionObserver({
      threshold: 0.5,
    });

    const child = Children.only(children);
    const ref = useMergeRefs<HTMLDivElement>([(child as any).ref, impressionRef]);

    useEffect(() => {
      if (!isIntersecting || logger.impression === undefined) {
        return;
      }
      logger.impression.onTrigger(params);
    }, [isIntersecting, logger.impression, params]);

    return cloneElement(child as any, {
      ref: ref,
    });
  };

  const Mount = ({
    children,
    params,
    //  options
  }: {
    children: ReactNode;
    params: P;
    // options: MountOptions
  }) => {
    const { logger } = useLogger();
    useEffect(() => {
      logger.mount?.onTrigger(params);
    }, [logger.mount, params]);
    return children;
  };

  return [
    {
      Provider: LoggerProvider,
      Click,
      Impression,
      Mount,
    },
    useLogger,
  ] as const;
};
