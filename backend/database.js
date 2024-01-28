const mongoose = require("mongose");

// mongodb url : mongodb+srv://ankursehrawat15:Mvhnsm4FoMAbfkiW@cluster0.laovrts.mongodb.net/
mongoose.connect("mongodb+srv://ankursehrawat15:Mvhnsm4FoMAbfkiW@cluster0.laovrts.mongodb.net/");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

