import React from "react";
import { Fragment, useEffect } from "react";

import { useDispatch } from "react-redux";

import Header from "./components/Header";
import SelecionaUF from "./components/SelecionaUF";
import SelecionaMunicipio from "./components/SelecionaMunicipio";
import Card from "./components/Card";
import ShowInfo from "./components/ShowInfo";

import { fetchUFData } from "./store/uf-slice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUFData());
	}, [dispatch]);

	return (
		<Fragment>
			<Card>
				<Header />
				<SelecionaUF />
				<SelecionaMunicipio />
				<ShowInfo />
			</Card>
		</Fragment>
	);
}

export default App;
