import { flushSync } from 'react-dom';
import './App.css';

// function App() {
//   return (
//     <div className="App">
// 		<h1>Hello, React!</h1>
//     </div>
//   );
// }

const Person = (props) => {
	return (
		<>
			<h1>Name: {props.name}</h1>
			<h2>Last Name: {props.lastname}</h2>
		</>
	);
}



const App = () => {


	return (
	  <div className="App">
		<h1>Welcome</h1>
		<hr></hr>
		<Person name="Mai" lastname="Tunchy"/>	
		<hr></hr>
		<Person name={"Mavis"} lastname={"Saeyang"}/>
		<hr></hr>
	  </div>
	);
  }

export default App;
