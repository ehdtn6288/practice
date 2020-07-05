import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";

const app = express();
app.set("view engine", "pug");

app.use(helmet());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", globalRouter);

export default app;
