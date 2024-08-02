import './App.css';

// function App() {
//   return (
//     <div className="App">
// 		<h1>Hello, React!</h1>
//     </div>
//   );
// }



const App = () => {
	const name = "Mai"
	let is_show_name = false;
	return (
	  <div className="App">
		  <h1>Hello, {is_show_name? name : "Anonymous"}!</h1>
	  </div>
	);
  }

export default App;
