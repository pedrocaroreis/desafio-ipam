import { createSlice } from "@reduxjs/toolkit";

const municipiosSlice = createSlice({
	name: "municipios",
	initialState: {
		listaMunicipios: [],
	},
	reducers: {
		preencheMunicipios(state, action) {
			state.listaMunicipios = action.payload.listaMunicipios;
		},
	},
});

export const fetchMunicipiosData = (uf) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
			);

			if (!response.ok) {
				throw new Error("Nao foi possivel conectar a base de dados!");
			}

			const data = await response.json();

			return data;
		};

		try {
			const municipiosData = await fetchData();
			dispatch(
				municipiosActions.preencheMunicipios({
					listaMunicipios: municipiosData,
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
};

export const municipiosActions = municipiosSlice.actions;

export default municipiosSlice;
