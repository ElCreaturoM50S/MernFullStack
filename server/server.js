const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 2137

//middleware
//posrednik server -> client / client -> server
app.use(express.json());

const myDatabase = "myDBtestowa"
const url = `mongodb://localhost:27017/${myDatabase}`
mongoose.connect(url)
const db = mongoose.connection

db.on("error", (err)=>console.log(`err ${err}`))
db.once("open", ()=>console.log("Connected to MongoDB"))

//Foremka
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

//Piekarnik
const User = mongoose.model('User', userSchema)

app.get("/api/users",async (req,res)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

app.listen(PORT, ()=>console.log(`Server jest w Watykanie na porcie ${PORT}`))

process.on('SIGINT', ()=>{
    console.log("Closing MongDB connection")
    mongoose.disconnect()
    console.log("MongDB connection diconnected")
    process.exit()
})