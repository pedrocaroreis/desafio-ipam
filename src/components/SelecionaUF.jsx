import React from "react";
// import { useState } from "react";

import { useSelector } from "react-redux";

const DUMMY_UF = ["AA", "BB", "CC"];

const SelecionaUF = () => {
	const ufs = useSelector((state) => state.uf.listaUFs);
	// const [selectedUF, setSelectedUF] = useState("");

	// const onChangeHandler = (e) => {
	// 	setSelectedUF(e.target.value);
	// };

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
				// onChange={onChangeHandler}
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
