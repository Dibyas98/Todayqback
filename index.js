const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv= require('dotenv')
dotenv.config();
const app = express();
const listing = require('./Routes/listing')
const offerRout = require('./Routes/offering')
const cartRout = require('./Routes/cart')
const Orderroute = require('./Routes/order')
const userRoute= require('./Routes/user')


mongoose.connect(process.env.URL)
.then(()=>{
    console.log('Datsbase connected success');
})
.catch((error)=>{
    console.log(error);
})
app.use(cors())
app.use(express.json());

app.use('/api',listing)
app.use('/api',offerRout)
app.use('/api',cartRout)
app.use('/api',Orderroute)
app.use('/api',userRoute)
app.use((req,res,next)=>{
    res.status(400).json({ message: 'Bad Request - No such route found'})
})

app.listen(10000,()=>{
    console.log('Server start at 3001');
})