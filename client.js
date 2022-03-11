let io = require("socket.io-client")

//connecting both the streams
const stream1 = io.connect("http://localhost:3000/stream1");
const stream2 = io.connect("http://localhost:3000/stream2");



//listining to the msg sent by stream1.send();
stream1.on('message', function (message) {
     console.log(message);
});

//
stream2.on('news' /*name of an event*/ , function (data) {
    console.log(data);

    stream2.emit('confirm', { 
        status: 'recived' 
    });

});



   
// setTimeout(function() {
//      stream1.disconnect();
//     }, 5000);

    
    //    setTimeout(function() {
    //     console.log(stream1.connected);
    //     }, 7000);
    

        
        // setTimeout(function() {
        //     stream1.connect(); 
        //    }, 12000);

       
//     setTimeout(function() {
//     console.log("stream1 id: "+stream1.id);
//     console.log("stream2 id: "+stream2.id);
//    }, 17000);