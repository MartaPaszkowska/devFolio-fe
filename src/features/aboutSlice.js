import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isExpanded: false,
};

const aboutSlice = createSlice({
	name: "about",
	initialState,
	reducers: {
		toggleExpand: (state) => {
			state.isExpanded = !state.isExpanded;
		},
	},
});

export const { toggleExpand } = aboutSlice.actions;
export default aboutSlice.reducer;
