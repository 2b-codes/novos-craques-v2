import express from "express";
import path from "path";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 8888;


app.use("/", express.static("public"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

routes(app);

console.log("Connected with API address - ", process.env.ROOT_URL || "localhost:3300");

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});
