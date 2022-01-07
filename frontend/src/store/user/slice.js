import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		username: undefined,
		role: undefined,
		isAuthenticated: false,
	},
	reducers: {
		setAuthenticated(state, action) {
			state.isAuthenticated = action.payload;
		},
		setUsername(state, action) {
			state.username = action.payload;
		},
		setUserRole (state, action) {
			state.role = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { setUserRole, setUsername, setAuthenticated } = userSlice.actions;
