import "./App.css";
import api from "./services/api";

import Input from "./components/input";
import Today from "./components/today";
import Tomorow from "./components/tomorow";
import BeforeTomorow from "./components/beforeTomorow";

function App() {
	function getTest() {
		var teste = api.get().then((response) => {
			console.log(response);
		});
		console.log(teste);
	}

	// Converte fahrenheit em celsius
	function toCelsius(fahrenheit) {
		return (5 * (fahrenheit - 32)) / 9;
	}

	// Converte celsius em fahrenheit
	function toFahrenheit(celsius) {
		return (celsius / 5) * 9 + 32;
	}

	return (
		<div className="App">
			<div className="container">
				<Input />
				<Today test={getTest} />
				<Tomorow />
				<BeforeTomorow />
			</div>
		</div>
	);
}

export default App;
