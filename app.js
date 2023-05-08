const express = require('express');
const app = express();
const con = require('./models/index');
const selectController=require('./controllers/selectController');
const optionController=require('./controllers/optionController');
const createtable =require('./routes/userRouter')

// app.get('/add', userctrl.addUser);
app.set('view engine', 'ejs')
app.use(express.json());
app.use('/',createtable)


app.listen(4000, () => {
    console.log(`Server is Running on 4000`);
})