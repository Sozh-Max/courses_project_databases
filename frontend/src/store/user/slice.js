import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: undefined,
		userName: undefined,
		role: undefined,
		isAuthenticated: false,
		userCart: [],
	},
	reducers: {
		setUserId(state, action) {
			state.id = action.payload;
		},
		setAuthenticated(state, action) {
			state.isAuthenticated = action.payload;
		},
		setUsername(state, action) {
			state.userName = action.payload;
		},
		setUserRole(state, action) {
			state.role = action.payload;
		},
		setUserCart(state, action) {
			const array = state.userCart;
			const id = action.payload.id;
			const elem = array.find(el => el.id === id);
			if (elem) {
				elem.value++;
			} else {
				array.push({
					...action.payload,
					value: 1,
				})
			}
			state.userCart = array;
		},
		decreaseUserCart(state, action) {
			const array = state.userCart;
			const id = action.payload.id;
			const elem = array.find(el => el.id === id);
			if (elem && elem.value > 1) {
				elem.value--;
				state.userCart = array;
			} else {
				state.userCart = state.userCart.filter(el => el.id !== id);
			}
		},
		removeItemUserCart(state, action) {
			state.userCart = state.userCart.filter(el => el.id !== action.payload);
		},
		resetUserCart(state) {
			state.userCart = [];
		},
	},
});

export const userReducer = userSlice.reducer;
export const {
	setUserId,
	setUserRole,
	setUsername,
	setAuthenticated,
	setUserCart,
	resetUserCart,
	removeItemUserCart,
	decreaseUserCart,
} = userSlice.actions;
