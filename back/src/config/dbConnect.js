import mongoose from "mongoose";

async function conectaDataBase (){

    mongoose.connect("mongodb+srv://richard:richard123@cluster0.6hymd1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default conectaDataBase;