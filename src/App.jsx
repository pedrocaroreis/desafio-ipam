import React, { Fragment } from "react";

import Header from "./components/Header";
import SelecionaUF from "./components/SelecionaUF";
import SelecionaMuni from "./components/SelecionaMuni";
import Card from "./components/Card";
import ShowInfo from "./components/ShowInfo";

function App() {
	return (
		<Fragment>
			<Card>
				<Header />
				<SelecionaUF />
				<SelecionaMuni />
				<ShowInfo />
			</Card>
		</Fragment>
	);
}

export default App;
