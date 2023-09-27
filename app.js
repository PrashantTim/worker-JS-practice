const express = require("express");
const { Worker, isMainThread } = require("worker_threads");

const app = express();
const PORT = 3000;

app.get("/fast", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.get("/slow", (req, res) => {
  const worker = new Worker("./workerTest.js");
  let data;
  worker.on("message", (msg) => {
    console.log("🚀 ~ file: app.js:16 ~ worker.on ~ msg:", msg);
    res.status(200).send({ msg });
  });
});
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
console.log("Hello World!");
