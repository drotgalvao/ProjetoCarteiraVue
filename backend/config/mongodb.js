const mongoose = require("mongoose");
const {dbUri} = require("../.env");

const uri = dbUri;

mongoose
  .connect(uri)
  .catch(e => {
    const msg = "Erro ao conectar com o banco de dados.";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });


