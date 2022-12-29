import React from "react";

import { useSelector } from "react-redux";

const DUMMY_UF = ["AA", "BB", "CC"];

const SelecionaMunicipio = () => {
	const municipios = useSelector((state) => state.municipio.listaMunicipios);

	return (
		<div className="text-center bg-white shadow-lg rounded-lg m-7 p-7 border-2 border-gray-500 text-3xl font-bold">
			<label
				className="block m-2"
				htmlFor="uf-select"
			>
				Lista de Municipios:
			</label>
			<select
				className="text-center"
				// onChange={onChangeHandler}
				name="municipio"
				id="muni-select"
			>
				<option value="">-- Escolha uma opção --</option>
				{municipios.map((el) => (
					<option
						key={el.id}
						value={el.nome}
					>
						{el.nome}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelecionaMunicipio;
