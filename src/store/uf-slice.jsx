import { createSlice } from "@reduxjs/toolkit";

const ufSlice = createSlice({
	name: "uf",
	initialState: {
		ufs: [],
	},
	reducers: {
		addUFs(state, action) {
			const newUF = action.payload;
			state.ufs.push({
				id: newUF.id,
				sigla: newUF.sigla,
				nome: newUF.nome,
				regiao: {
					id: newUF.regiao.id,
					sigla: newUF.regiao.sigla,
					nome: newUF.regiao.nome,
				},
			});
		},
	},
});

export const ufActions = ufSlice.actions;

export default ufSlice;
