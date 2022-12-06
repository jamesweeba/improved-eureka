let express = require("express");
let app = express();
let http = require("http");
let cors = require('cors')
let server = http.createServer(app);
let { Server } = require('socket.io');
const path=require('path')
const port=process.env.PORT || 3001
app.use(cors());
let io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });
app.get('/',(req,res)=>{
   
     app.use(express.static(path.join(__dirname,'client/build')))
    return res.sendFile(path.join(__dirname,'client/build','index.html'));
})

io.on("connection", (socket) => {
    let users = [];
    for (let [id,socket] of io.of("/").sockets) {
        users.push({ user_id: id,username: socket.handshake.auth.name});
        users = [...new Map(users.map(item =>
            [item["username"], item])).values()];
    }
    io.emit("users", users);
    socket.emit("user",socket.id);

    socket.on('getMsg', (data) => {
        socket.broadcast.to(data.to).emit('send', { to: data.to, from: socket.id, msg: data.msg })
    })
    socket.on('disconnect', () => {
        let connectedUser = [...users].filter(item => {
            return item.user_id != socket.id
        });
        io.emit('users', connectedUser);
    })
})


server.listen(port, () => {
    console.log("magic happens on port 3001")
})






