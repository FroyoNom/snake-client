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

  conn.on("connect", connect => {
    console.log("Successfully connected to game server!");
    conn.write("Name: SIO");
  });

  const setupInput = () => {
    const stdn = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", setupInput => {
      if (setupInput === "w") {
        conn.write("Move: up");
      }
      if (setupInput === "s") {
        conn.write("Move: down");
      }
      if (setupInput === "a") {
        conn.write("Move: left");
      }
      if (setupInput === "d") {
        conn.write("Move: right");
      }
    });
    return stdn;
  };

  const handleUserInput = () => {
    stdin.on("data", handleUserInput => {
      if (handleUserInput === "\u0003") {
        process.exit();
      }
    });
  };

  setupInput();
  handleUserInput();
  return conn;
};

console.log("Connecting...");
connect();

module.exports = connect;
