import express from "express";
import {
  login,
  join,
  logout,
  search,
  home,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);

globalRouter.get("/login", login);

globalRouter.get("/join", join);

globalRouter.get("/logout", logout);

globalRouter.get("/search", search);

export default globalRouter;
