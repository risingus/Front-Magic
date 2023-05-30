import { BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout';
import { Router } from './Router';

function App() {

	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	)
}

export default App;
