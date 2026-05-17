import { createContext } from 'react';
import { type AppContextValues, APP_CONTEXT_DEFAULT_VALUES } from './AppContextConfig';


export const AppContext = createContext<AppContextValues>(
	APP_CONTEXT_DEFAULT_VALUES
);
