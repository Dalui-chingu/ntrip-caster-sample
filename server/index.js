// import {useParams} from 'react-router-dom'
const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")
const UserModel=require('./models/Bases')
const BaseStation = require("./models/Bases")
const app=express()
app.use(cors())
app.use(express.json())
const port = 3001;

mongoose.connect("mongodb+srv://Subha-admin:8HwDCsK4EktIdnIa@cluster0.xhhtsqg.mongodb.net/ntripDB");


app.get('/api/data', async (req, res) => {
  try {
    const data = await BaseStation.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});