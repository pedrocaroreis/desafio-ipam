import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: { uf: ufSlice.reducer, municipio: municipioSlice.reducer },
	// reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
