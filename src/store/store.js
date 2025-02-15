import { configureStore } from "@reduxjs/toolkit";
import readMoreReducer from "../features/readMoreSlice";

const store = configureStore({
	reducer: {
		readMore: readMoreReducer,
	},
});

export default store;
