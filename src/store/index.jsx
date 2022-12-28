import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: { uf: ufSlice.reducer, municipio: municipioSlice.reducer },
});

export default store;
