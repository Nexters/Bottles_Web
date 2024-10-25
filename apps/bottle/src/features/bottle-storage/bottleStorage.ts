const KEY_PREFIX = 'bottle_';

export const keyMap = {
  introAnswers: `${KEY_PREFIX}intro-answers`,
};

export type Key = (typeof keyMap)[keyof typeof keyMap];

export const bottleStorage = {
  getItem: <T>(key: Key) => {
    const rawValue = localStorage.getItem(key);
    const value = rawValue == null ? undefined : JSON.parse(rawValue);
    return value as T | undefined;
  },
  setItem: (key: Key, value: string) => {
    localStorage.setItem(key, value);
    window.dispatchEvent(new Event('storage'));
  },
  removeItem: (key: Key) => {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  },
};
