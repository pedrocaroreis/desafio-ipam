import { configureStore } from "@reduxjs/toolkit";

import ufSlice from "./uf-slice";
import municipioSlice from "./municipio-slice";

const store = configureStore({
	reducer: { uf: ufSlice.reducer, municipio: municipioSlice.reducer },
});

export default store;
