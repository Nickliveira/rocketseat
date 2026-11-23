import { createServer } from "node:http";

createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method === "GET" && request.url === "/health") {
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: "Rota não encontrada" }));
}).listen(0, "127.0.0.1", function () {
  console.log("http://127.0.0.1:" + this.address().port + "/health");
});
