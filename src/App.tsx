import './App.scss';
import { Button } from './components/Button';
import { ButtonWithRipple } from './components/ButtonWithRipple'
import { HackerText } from './components/HackerText';
import { MouseBlob } from './components/MouseBlob';
import { Slider } from './components/Slider';

function App() {

	return (
		<div className='appContainer'>
			<Slider />
			<Button>
				Hover me
			</Button>
			<HackerText />
			<ButtonWithRipple />
			<MouseBlob />
		</div>
	)
}

export default App;
