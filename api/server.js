import express from "express";
import serverless from "serverless-http";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Backend działa na Vercel!" });
});

export default app;
export const handler = serverless(app);
