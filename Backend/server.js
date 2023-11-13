
const dotenv=require('dotenv')
const {notFound,errorHandler}=require('./middleware/errorMiddleware')
const express = require("express");
const { chats } = require('./data/data');
const connectDB = require("./config/db"); 
dotenv.config();

const userRoutes = require('./Routes/userRoutes.js');



process.env.MONGO_URI = "mongodb+srv://vishnupriyakolatt:vishnupriyakolatt@cluster0.1765npw.mongodb.net/?retryWrites=true&w=majority";
connectDB();


const app = express();
app.use(express.json())//to accept json data

app.get("/", (req, res) => {
    res.send("API is running successfully");
});
app.use('/api/user',userRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000; 
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
