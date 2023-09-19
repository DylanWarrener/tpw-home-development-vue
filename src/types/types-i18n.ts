type TranslateFunction = (key: string, options?: Record<string, any>) => string;

export type i18nType = {
	t: TranslateFunction;
};
