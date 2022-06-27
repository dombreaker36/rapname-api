import express, { response } from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express()
const PORT = 8000

const rappers = {
'21 savage':{
  age: 29,
  birthname: "sheya Bin AAbraham-joseph",
  birthlocation: 'London, England' 
},
'Chance the rapper':{
  age: 29,
  birthname: "Chancelor Bennet",
  birthlocation: 'Chicago, illinois' 
},
'Dylan ':{
  age: 29,
  birthname: "sdylan",
  birthlocation: 'dylan' 
}
}

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})


app.get('/api/:rapperName', (req, res)=>{
  const rappersName = req.params.rapperName.toLowerCase()

  if (rappers[rappersName]) {
    res.json(rappers[rappersName])
  }else {
    res.json(rappers['Dylan'])
  }
  // res.json(rappers)
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on ${PORT}`)
})