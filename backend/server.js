import "dotenv/config";
import app from "./app.js";

(async () => {
	app.listen(4000, () => {
		console.log("Server running. Use our API on port: 4000");
	});
})();
