let io = require("socket.io-client")
const stream1 = io("http://localhost:3000/stream1");
stream1.connect();

const stream2 = io("http://localhost:3000/stream2");
stream2.connect();


setTimeout(function() {
    console.log("stream1 id: "+stream1.id);
    console.log("stream2 id: "+stream2.id);
    
   }, 2000);


setTimeout(function() {
     stream1.disconnect();
    }, 5000);

    
       setTimeout(function() {
        console.log(stream1.connected);
        }, 7000);
    
        setTimeout(function() {
            stream1.connect();
           }, 5000);
       
           