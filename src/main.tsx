import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css';
import './lib/emergency-kit/styles.css';

ReactDOM.createRoot(
	document.getElementById('pims-dematerialized-root')!
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
