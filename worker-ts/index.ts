import { Request, Response } from "express";

const express = require("express");
const { Worker, isMainThread } = require("worker_threads");

const app = express();
const PORT = 3000;

app.get("/fast", (req: Request, res: Response) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.get("/slow", (req: Request, res: Response) => {
  const worker = new Worker("./workerTest.ts");
  let data;
  worker.on("message", (msg: any) => {
    console.log("🚀 ~ file: app.js:16 ~ worker.on ~ msg:", msg);
    res.status(200).send({ msg });
  });
});
app.listen(PORT, (error: any) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
console.log("Hello World!");
