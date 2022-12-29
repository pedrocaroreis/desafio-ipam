import React from "react";

import { useSelector } from "react-redux";

const ShowInfo = () => {
	const municipioSelecionado = useSelector(
		(state) => state.municipioinfo.municipioinfo
	);

	// console.log(municipioSelecionado["distrito-nome"]);

	return (
		<div className="text-center m-7 p-7 bg-white shadow-lg rounded-lg border-2 border-gray-500 text-3xl font-bold">
			<h2 className="underline inline-block mb-4"> Dados Gerais</h2>
			<p> Nome do Municipio: {municipioSelecionado["distrito-nome"]}</p>
			<p> Mesorregião: {municipioSelecionado["mesorregiao-nome"]}</p>
			<p>
				UF: {municipioSelecionado["UF-nome"]} -{" "}
				{municipioSelecionado["UF-sigla"]}
			</p>
			<p> Região do Municipio: {municipioSelecionado["regiao-nome"]}</p>
		</div>
	);
};

export default ShowInfo;
