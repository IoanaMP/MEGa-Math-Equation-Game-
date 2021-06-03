
const http = require('http')
const port = 3030
const url = require('url');
const fs = require('fs');

const requetHandler = (req, response) => {
    console.log(req.url);
    response.end("hello merge")
}

const server = http. createServer(requetHandler)

server.listen(port, (err)=>{
    if(err){
        return console.log('sth is wrong', err);
    }
    console.log(`the server is listening on port ${port}`);
})

