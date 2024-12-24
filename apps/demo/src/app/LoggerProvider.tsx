'use client';

import { Logger as _Logger } from './logger';

/**
 * re-export so that each component can be used in RSC
 */
export const LoggerProvider = _Logger.Provider;
export const LoggerClick = _Logger.Click;
export const LoggerMount = _Logger.Mount;
export const LoggerImpression = _Logger.Impression;
