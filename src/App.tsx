import './App.scss';
import { Button } from './components/Button';
import { ButtonWithRipple } from './components/ButtonWithRipple'
import { HackerText } from './components/HackerText';
import { Slider } from './components/Slider';

function App() {

	return (
		<div className='appContainer'>
			<Slider />
			<Button text='Click Me!' />
			<HackerText />
			<ButtonWithRipple />
		</div>
	)
}

export default App;
