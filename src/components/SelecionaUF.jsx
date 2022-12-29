import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchMunicipiosData } from "../store/municipios-slice";

const SelecionaUF = () => {
	const ufs = useSelector((state) => state.uf.listaUFs);

	const dispatch = useDispatch();

	const onChangeHandler = (e) => {
		dispatch(fetchMunicipiosData(e.target.value));
	};

	return (
		<div className="text-center bg-white shadow-lg rounded-lg m-7 p-7 border-2 border-gray-500 text-3xl font-bold">
			<label
				className="block m-2"
				htmlFor="uf-select"
			>
				Lista de UFs:
			</label>
			<select
				className="text-center"
				onChange={onChangeHandler}
				name="uf"
				id="uf-select"
			>
				<option value="">-- Escolha uma opção --</option>
				{ufs.map((el) => (
					<option
						key={el.id}
						value={el.sigla}
					>
						{el.sigla} - {el.nome}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelecionaUF;
