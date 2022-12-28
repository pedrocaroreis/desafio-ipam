import React from "react";
import { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import SelecionaUF from "./components/SelecionaUF";
import SelecionaMunicipio from "./components/SelecionaMunicipio";
import Card from "./components/Card";
import ShowInfo from "./components/ShowInfo";

import { fetchUFData } from "./store/uf-slice";

function App() {
	const dispatch = useDispatch();
	const ufs = useSelector((state) => state.uf);

	useEffect(() => {
		dispatch(fetchUFData());
		console.log(ufs);
	}, [dispatch]);

	console.log(ufs);

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
