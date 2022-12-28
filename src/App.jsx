import React, { Fragment, useEffect } from "react";

import { useDispatch } from "react-redux";

import Header from "./components/Header";
import SelecionaUF from "./components/SelecionaUF";
import SelecionaMuni from "./components/SelecionaMuni";
import Card from "./components/Card";
import ShowInfo from "./components/ShowInfo";

import { ufActions } from "./store/uf-slice";

function App() {
	const dispatch = useDispatch;

	useEffect(() => {
		fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
			.then((response) => response.json())
			.then((data) => console.log(data));
		const fetchData = async () => {
			const data = await fetch(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados"
			);
			const response = await data.json();
			return response;
		};
		try {
			fetchData();
		} catch (error) {
			console.error;
		}
	}, []);

	// const fetchUFs = async () => {
	// 	const response = await fetch(
	// 		"https://servicodados.ibge.gov.br/api/v1/localidades/estados"
	// 	);
	// 	if (!response.ok) {
	// 		throw new Error("Nao foi possivel conectar");
	// 	}
	// 	const data = await response.json();
	// };

	const preencheUFs = () => {
		dispatch(
			ufActions.addUFs({
				id,
				sigla,
				nome,
				regiao: {
					id,
					sigla,
					nome,
				},
			})
		);
	};

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
