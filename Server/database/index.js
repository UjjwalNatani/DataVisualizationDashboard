import mongoose from "mongoose";
// require('dotenv').config();
// database connection
export const mongoDB = () => {
    const uri = 'mongodb+srv://ujjwalnatani10:Ugnatani@cluster0.yxotofl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("MongoDB database is connected!");
        })
        .catch((error) => {
            console.log("Error connecting to MongoDB:", error);
        });


}
