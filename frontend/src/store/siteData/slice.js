import { createSlice } from '@reduxjs/toolkit';


const siteDataSlice = createSlice({
	name: 'siteData',
	initialState: {
		categories: [],
		products: [],
		productParams: [],
	},
	reducers: {
		setCategories(state, action) {
			state.categories = action.payload;
		},
		resetCategories(state) {
			state.categories = [];
		},
		setProducts(state, action) {
			state.products = action.payload;
		},
		resetProducts(state) {
			state.products = [];
		},
		setProductParams(state, action) {
			state.productParams = action.payload;
		},
	},
});

export const siteDataReducer = siteDataSlice.reducer;
export const {
	setCategories,
	resetCategories,
	setProducts,
	resetProducts,
	setProductParams,
} = siteDataSlice.actions;
