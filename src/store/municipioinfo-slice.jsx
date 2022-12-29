import { createSlice } from "@reduxjs/toolkit";

const municipioinfoSlice = createSlice({
	name: "municipioinfo",
	initialState: {
		municipioinfo: [],
	},
	reducers: {
		informaMunicipio(state, action) {
			state.municipioinfo = action.payload.municipioinfo;
		},
	},
});

export const fetchMunicipioInfo = (idMunicipio) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${idMunicipio}/distritos`
			);

			if (!response.ok) {
				throw new Error("Nao foi possivel conectar a base de dados!");
			}

			const data = await response.json();

			return data;
		};

		try {
			const municipioInfo = await fetchData();
			dispatch(
				municipioinfoActions.informaMunicipio({
					municipioinfo: municipioInfo,
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
};

export const municipioinfoActions = municipioinfoSlice.actions;

export default municipioinfoSlice;
