import './App.css';
import './fonts.css';

function App() {
	return (
		<div style={{ fontFamily: 'Marianne' }}>
			<h1>Hello World</h1>
			<h2>Hello World</h2>
			<h3>Hello World</h3>
			<h4>Hello World</h4>
			<h5>Hello World</h5>
			<h6>Hello World</h6>
			<p>Hello World</p>
			<p style={{ fontWeight: 100 }}>Test the weight</p>

			<p style={{ fontWeight: 300 }}>Test the weight</p>

			<p style={{ fontWeight: 400 }}>Test the weight</p>

			<p style={{ fontWeight: 500 }}>Test the weight</p>

			<p style={{ fontWeight: 700 }}>Test the weight</p>

			<p style={{ fontWeight: 800 }}>Test the weight</p>

			<p style={{ fontWeight: 500, fontStyle: 'italic' }}>Test the weight</p>
		</div>
	);
}

export default App;
