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
	// const ufs = useSelector((state) => state.uf);

	useEffect(() => {
<<<<<<< HEAD
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
=======
		dispatch(fetchUFData());
	}, [dispatch]);
>>>>>>> 96f0e7eee31ba97876044513734e4a216289d49d

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
