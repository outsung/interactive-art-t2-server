
module.exports = (io) => {    // https://amritb.github.io/socketio-client-tool/
    io.on('connection', (socket) => {
        socket.on('animationStart', () => {
            socket.emit('animationStart');
        });
    });
}


