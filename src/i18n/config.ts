export type Locale = (typeof locales)[number];

export const locales = ['fa', 'en' , 'de'] as const;
export const defaultLocale: Locale = 'en';