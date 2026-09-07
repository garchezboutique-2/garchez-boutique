import { persistentAtom } from '@nanostores/persistent';

export type UserPreferences = {
  theme: 'light' | 'dark';
  language: 'es' | 'en';
};

export const userPreferences = persistentAtom<UserPreferences>(
  'garchez-user-preferences',
  {
    theme: 'light',
    language: 'es',
  }
);
