import React, { Fragment } from "react";
import Header from "./components/Hello";
import Selector from "./components/Selector";
import Card from "./components/Card";
import ShowData from "./components/ShowData";

function App() {
	return (
		<Fragment>
			<Card>
				<Header />
				<Selector tipo="UFs" />
				<Selector tipo="Municipio" />
				<ShowData />
			</Card>
		</Fragment>
	);
}

export default App;
