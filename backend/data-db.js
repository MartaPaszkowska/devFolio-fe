import "dotenv/config";

import mongoose from "mongoose";

async function connectDB() {
	const MONGO_URI = process.env.MONGO_URI;

	await mongoose
		.connect(MONGO_URI)
		.then(() => console.log("Database connection successful"))
		.catch((error) => {
			console.error("Database connection error:", error.message);
			process.exit(1);
		});
}
export default connectDB;
