import { members } from "../db";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", members });
};

export const login = (req, res) => {
  res.render("login");
};

export const join = (req, res) => {
  res.render("join");
};

export const logout = (req, res) => {
  res.render("logout");
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};
