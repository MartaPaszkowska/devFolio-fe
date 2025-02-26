import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isExpanded: false,
};

const readMoreSlice = createSlice({
	name: "readMore",
	initialState,
	reducers: {
		toggleReadMore: (state) => {
			state.isExpanded = !state.isExpanded;
		},
	},
});

export const { toggleReadMore } = readMoreSlice.actions;
export default readMoreSlice.reducer;
