import { createSlice } from "@reduxjs/toolkit";

const municipioSlice = createSlice({
	name: "municipio",
	initialState: {
		listaMunicipios: [],
	},
	reducers: {
		preencheMunicipios(state, action) {
			state.listaMunicipios = action.payload.listaMunicipios;
		},
	},
});

export const fetchMunicipioData = (uf) => {
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
			const municipioData = await fetchData();
			dispatch(
				municipioActions.preencheMunicipios({
					listaMunicipios: municipioData,
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
};

export const municipioActions = municipioSlice.actions;

export default municipioSlice;
