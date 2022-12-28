import React from "react";
import { useState } from "react";

const DUMMY_UF = ["AA", "BB", "CC"];

const SelecionaMuni = () => {
	const [selectedMuni, setSelectedMuni] = useState("");

	const onChangeHandler = (e) => {
		setSelectedMuni(e.target.value);
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
				{DUMMY_UF.map((el) => (
					<option value={el}> {el} </option>
				))}
			</select>
		</div>
	);
};

export default SelecionaMuni;
