import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './App.css';
import './lib/0-home/styles.css';
import './lib/1-information/styles.css';
import './lib/2-emergency-kit/styles.css';
import './lib/3-alert/styles.css';

ReactDOM.createRoot(
	document.getElementById('pims-dematerialized-root')!
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
