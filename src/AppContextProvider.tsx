import { useState, createContext } from 'react';

import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

const DARK_THEME_IDENTIFIER = JSON.stringify('dark');

export type AppContextValues = {
	isDarkTheme: boolean;
	setIsDarkTheme: (nextValue: boolean | 'system') => void;
};

const defaultAppContextValues = {
	isDarkTheme: false,
	setIsDarkTheme: () => {},
};

export const AppContext = createContext<AppContextValues>(
	defaultAppContextValues
);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isDark, setIsDark } = useIsDark();
	const [isDarkTheme, _setIsDarkTheme] = useState(isDark);

	// Set the context value as well as the localStorage for next times
	const setIsDarkTheme = (nextValue: boolean | 'system') => {
		// Update DSFR theme tracker
		setIsDark(nextValue);
		// Update PIMS theme tracker
		const systemIsDark =
			localStorage.getItem('scheme') === DARK_THEME_IDENTIFIER;
		_setIsDarkTheme(nextValue === 'system' ? systemIsDark : nextValue);
	};
	console.log(localStorage);

	const appContextValues = {
		isDarkTheme,
		setIsDarkTheme,
	};

	return (
		<AppContext.Provider value={appContextValues}>
			{children}
		</AppContext.Provider>
	);
}
