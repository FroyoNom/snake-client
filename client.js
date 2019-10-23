const net = require("net");
const { IP, PORT, NAME } = require("./constants");

//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text

  conn.on("connect", () => {
    console.log("Connected");
    conn.write(`Name: ${NAME}`);
  });
  conn.on("data", data => {
    console.log(data);
  });
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
