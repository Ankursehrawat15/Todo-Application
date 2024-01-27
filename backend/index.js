const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());

app.get('/list',function(req, res){
    
});

app.post('/add',function(req, res){
     const createPayload = req.body;
     const parsePayload = createTodo.safeParse(createPayload);

     if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
     }

     // send data to database is parsepayload sucess is true
     
     
     

});

app.put('/status',function(req, res){

});



app.listen(3000);