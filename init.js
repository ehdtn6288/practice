import express from "express";
import app from "./app";

const PORT = 4000;

const listenHandler = () =>
  console.log(`This is on :✅http://localhost:${PORT}`);

app.listen(PORT, listenHandler);
