const express = require("express");
require("dotenv").config();
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.config();
    this.listen();
  }

  config() {
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}

module.exports = Server;
