import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../features/aboutSlice";
import readMoreReducer from "../features/readMoreSlice";

const store = configureStore({
	reducer: {
		about: aboutReducer,
		readMore: readMoreReducer,
	},
});

export default store;
