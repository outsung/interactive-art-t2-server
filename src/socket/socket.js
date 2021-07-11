module.exports = (io) => {
  // https://amritb.github.io/socketio-client-tool/
  // console.log(io);

  io.on("connection", (socket) => {
    console.log("connection!!!");

    socket.on("animationStart", () => {
      console.log("animationStart!!");
      io.emit("animationStart");
    });

    socket.on("upIntensity", () => {
      console.log("upIntensity!!");
      io.emit("upIntensity");
    });
  });
};
