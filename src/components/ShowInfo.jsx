import React from "react";

import { useSelector } from "react-redux";

const ShowInfo = () => {
	const municipioSelecionado = useSelector(
		(state) => state.municipioinfo.municipioinfo
	);

	console.log(municipioSelecionado);

	return (
		<div className="text-center m-7 p-7 bg-white shadow-lg rounded-lg border-2 border-gray-500 text-3xl font-bold">
			<h2 className="underline"> Dados Gerais</h2>
			<p> Nome do Municipio: </p>
			<p> Mesorregião: </p>
			<p> UF: </p>
			<p> Região do Municipio: </p>
		</div>
	);
};

export default ShowInfo;
