import './App.scss';
import { Button } from './components/Button';
import { Slider } from './components/Slider';

function App() {

	return (
		<div className='appContainer'>
      <Slider />
      <Button text='Click Me!'/>

		</div>
	);
}

export default App;
