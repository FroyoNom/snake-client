// 192.168.88.149

const net = require("net");
const stdin = process.stdin;

//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: "192.168.88.149",
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  stdin.on("data", data => {
    conn.write(data);
  });

  conn.on("connect", connect => {
    console.log("Successfully connected to game server!");
    conn.write("Name: SIO");
  });
  // conn.on("data", () => {
  //   conn.write("Name: SIO");
  // });

  return conn;
};

console.log("Connecting...");
connect();

module.exports = connect;
