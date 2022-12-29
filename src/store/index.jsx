import { configureStore } from "@reduxjs/toolkit";

import ufSlice from "./uf-slice";
import municipiosSlice from "./municipios-slice";
import municipioinfoSlice from "./municipioinfo-slice";

const store = configureStore({
	reducer: {
		uf: ufSlice.reducer,
		municipios: municipiosSlice.reducer,
		municipioinfo: municipioinfoSlice.reducer,
	},
});

export default store;
