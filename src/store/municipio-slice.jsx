import { createSlice } from "@reduxjs/toolkit";

const municipioSlice = createSlice({
	name: "municipio",
	initialState: {
		listaMunicipios: [],
	},
	reducers: {},
});

export const municipioActions = municipioSlice.actions;

export default municipioSlice;
