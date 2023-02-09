import './App.scss';
import { Button } from './components/Button';
import { ButtonWithRipple } from './components/ButtonWithRipple'
import { Slider } from './components/Slider';

function App() {

	return (
		<div className='appContainer'>
			<Slider />
			<Button text='Click Me!' />
			<ButtonWithRipple />
		</div>
	)
}

export default App;
