import Home from './pages/Home'
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={ <Home />} />
					<Route path="/home" element={ <Home />} />
					<Route path="/contact" element={ <Contact />} />
				</Routes>
			</BrowserRouter>
		</>	
	);
}

export default App;