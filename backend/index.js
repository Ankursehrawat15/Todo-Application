const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./database');


const app = express();

app.use(express.json());

app.get('/list',async function(req, res){

    const todos = await todo.find();
    res.json({
        todos
    });
    
});

app.post('/add',async function(req, res){
     const createPayload = req.body;
     const parsePayload = createTodo.safeParse(createPayload);

     if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
     }

     // send data to database is parsepayload sucess is true
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

   res.json({
      msg: "Todo Added Successfully"
   })   
     

});

app.put('/status',async function(req, res){
    
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent wrong inputs",
        });

        return;
    }

    // update todo status in database
    await todo.updateOne({
        _id: req.body.id},{
            completed: true
        }
        );
    res.json({
        msg: `${req.body.id} is marked as comeplete`
    })    

});


const server = 3000;

app.listen(server, function(){
    console.log(`Server is running ${server}`);
});