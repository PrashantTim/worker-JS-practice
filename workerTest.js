const { parentPort } = require("worker_threads");

let data;
for (let i = 0; i <= 1000000000; i++) {
  if (i === 1000000000) {
    data = 1000000000;
    parentPort.postMessage(data);
  }
}
