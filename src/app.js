const server = require("http").createServer();
const io = require("socket.io")(server);
const Mnode = require("./mnode")
const channel = require("./channel")
const router = require("./router")

io.on("connection", socket => {
    channel.push(socket);
    const mNode = new Mnode(socket);
    // socket.on("mnode_from_client", )
    socket.on("c2s_send", (requestId, data) => {
        router.dispatch(socket, requestId, data)
    })
})