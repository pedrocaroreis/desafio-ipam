import { createSlice } from "@reduxjs/toolkit";

const ufSlice = createSlice({
	name: "uf",
	initialState: {
		ufs: [],
	},
	reducers: {},
});

export const ufActions = ufSlice.actions;

export default ufSlice;
