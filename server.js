const express = require("express");
const app = express()
const socket = require("socket.io");
var port = 3000;


var server = app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  
  var io = socket(server);



   var stream1 = io.of("/stream1");

   stream1.on("connection" , (server)=>{
      console.log("user connected on stream 1");
      stream1.send('hi');
      server.on('disconnect', () => {
      console.log('user disconnected from stream 1');
    });
   })

  
 
    
var stream2 = io.of("/stream2");

    stream2.on("connection" , (server)=>{
        console.log("user connected on stream2");

        stream2.emit('news', { 
          hello: 'world' 
         }); 

         stream2.on('confirm', function(data){
          console.log(data)
          })
  

      server.on('disconnect', () => {
      console.log('user disconnected from stream 2');
    });
        
    })
   
  