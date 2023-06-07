const express = require("express");

const app = express();
const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded());
app.use((req ,res , next) => {
  console.log(req.url);
  next();
});

app.listen(PORT, ()=> console.log (`Running Express on port ${PORT}`));

const groceriesList = [{
  item: 'milk',
  quanitity:2,
},
{
  item: 'greens',
  quanitity: 3,
},
{
  item: 'Cereals',
  quantity:7,
}
];

app.get('/groceries', 
(request, response, next)=>{
  console.log('Before Handling Request');
  next();
},
(request, response)=>{
  response.send(groceriesList);
});

app.post('/groceries', (request, response)=>{
  console.log(request.body);
  groceriesList.push(request.body)
  response.send(201)
})
