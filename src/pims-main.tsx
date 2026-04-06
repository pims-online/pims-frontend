import React from 'react';
import ReactDOM from 'react-dom/client';

import { PimsApp } from './PimsApp';
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
startReactDsfr({ defaultColorScheme: "system" });

import './App.css';
import './lib/1-information/styles.css'
import './lib/pims/styles.css';

ReactDOM.createRoot(
	document.getElementById('pims-dematerialized-root')!
).render(
	<React.StrictMode>
		<PimsApp/>
	</React.StrictMode>
);