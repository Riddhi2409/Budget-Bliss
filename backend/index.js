const express = require('express');
const cors= require('cors');

require('dotenv').config();

const connectdb = require('./mongodb/connect')
const port = 8080;
const transactionRoutes = require('./routes/transactions');
const authRoutes = require('./routes/auth')

const app=express();

app.use(express.json());
app.use(cors());
app.use('/auth',authRoutes);
app.use('/api/v1',transactionRoutes);
const startServer = async () => {
    try {
      connectdb.connectdb(process.env.MONGO_URL);
      app.listen(port, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };  


  startServer()

app.get('/',(req,res)=>{
    res.send('hello world');
})