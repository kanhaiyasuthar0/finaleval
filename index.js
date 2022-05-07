const http = require("http");
const app = require("./controllers/routes");
const connect = require("./config/db");


const PORT = process.env.PORT ||  9007;

http.createServer(app).listen(PORT, async ()=>{
    await connect();
    console.log(`Server is connected ${PORT}`)
})
