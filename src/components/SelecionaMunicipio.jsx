import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchMunicipioInfo } from "../store/municipioinfo-slice";

const SelecionaMunicipio = () => {
	const municipios = useSelector((state) => state.municipios.listaMunicipios);

	const dispatch = useDispatch();

	const onChangeHandler = (e) => {
		dispatch(fetchMunicipioInfo(e.target.value));
	};

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
				onChange={onChangeHandler}
				name="municipio"
				id="muni-select"
			>
				<option value="">-- Escolha uma opção --</option>
				{municipios.map((el) => (
					<option
						key={el.id}
						value={el.id}
					>
						{el.nome}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelecionaMunicipio;
