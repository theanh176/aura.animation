import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tokenUser: "",
	detailUser: "",
	checkRegister: "",
};

export const AccountReducer = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		getTokenUser: (state, action) => {
			state.tokenUser = action.payload;
		},
		getDetailUser: (state, action) => {
			state.detailUser = action.payload;
		},
		registerUser: (state, action) => {
			state.checkRegister = action.payload;
		},
		deleteDetailUser: (state, action) => {
			state.detailUser = "";
		},
	},
});

export default AccountReducer.reducer;

export const { getTokenUser, getDetailUser, registerUser, deleteDetailUser } =
	AccountReducer.actions;
