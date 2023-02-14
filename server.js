// skapar en server som lyssnar på port 80
const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static('www'))
app.use(express.json());
app.get('/', function(req, res){

  res.sendFile(path.join(__dirname + '/www/index.html'));
});

// Arrayen som ska användas för att spara todos.

let inputArray = [
  
];

let id = 1;

// Lägger till en todo i arrayen
app.post('/todos', (req, resp)=>{
const todo = (req.body);
todo.id = id++;
console.log(todo);
inputArray.push(todo, todo.id);
resp.send(todo);

})

//Hämtar en specifik todo från arrayen med hjälp av id

app.get('/todos/:id', (req, resp)=>{
   const id = Number(req.params.id)
    const found = inputArray.filter(todo => id === todo.id)
    if(found.length === 0){
        resp.status(404).send('Not found');
    }else{
    resp.status(200).send (found[0]);
    }
})

//Hämtar alla todos från arrayen
app.get('/todos', (req, resp)=>{
resp.send(inputArray);
})


//Raderar en todo från arrayen med hjälp av id
app.delete('/todos/:id', (req, resp)=>{
    const id = Number(req.params.id)
    const found = inputArray.filter(todo => id === todo.id)
    if(found.length === 0){
        resp.status(404).send('Not found');
    }else{
    resp.status(200).send ("DELETED");
    inputArray = inputArray.filter(todo => id !== todo.id)
    }
}
)

//Uppdaterar en todo i arrayen med hjälp av id
app.put('/todos/:id', (req, resp)=>{
    const id = Number(req.params.id)
    const found = inputArray.filter(todo => id === todo.id)
    if(found.length === 0){
        resp.status(404).send('Not found');
    }else{
    resp.status(200).send ("UPDATED");
    const todo = (req.body);
    todo.id = id;
    inputArray = inputArray.filter(todo => id !== todo.id)
    inputArray.push(todo);

    }
}
)

// Startar servern, lyssnar på port 80
app.listen(80);





