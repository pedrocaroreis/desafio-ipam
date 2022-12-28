import { createSlice } from "@reduxjs/toolkit";

const ufSlice = createSlice({
	name: "uf",
	initialState: {
		listaUFs: [],
	},
	reducers: {
		preencheUFs(state, action) {
			state.listaUFs = action.payload.listaUFs;
		},
	},
});

export const fetchUFData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados"
			);

			if (!response.ok) {
				throw new Error("Could not fetch cart data!");
			}

			const data = await response.json();

			return data;
		};

		try {
			const ufData = await fetchData();
			dispatch(
				ufActions.preencheUFs({
					listaUFs: ufData.listaUFs,
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
};

export const ufActions = ufSlice.actions;

export default ufSlice;
