const net = require("net");

//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: "192.168.88.149",
    port: 50541
  });

  //interpret incoming data as text

  conn.on("connect", () => {
    console.log("Connected");
    conn.write("Name: SIO");
  });
  conn.on("data", data => {
    console.log(data);
  });
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
