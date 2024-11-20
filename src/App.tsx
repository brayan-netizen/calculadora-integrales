import './App.css';
import integralLogo from '/integral.svg';
import Calculator from './components/Calculator';

function App() {
	return (
		<div className='container'>
			<img src={integralLogo} className='logo react' alt='React logo' />
			<Calculator />
		</div>
	);
}

export default App;
