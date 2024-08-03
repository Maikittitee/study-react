import Home from './pages/Home'
import Contact from './pages/Contact';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={ <Home />} />
					<Route path="/home" element={ <Home />} />
					<Route path="/contact" element={ <Contact />} />
					<Route path="*" element={ <Error />} />
				</Routes>
			</BrowserRouter>
		</>	
	);
}

export default App;