import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://ananddurgesh701:Durgesh12%23$@cluster0.wwmnd.mongodb.net/todo-app');
    console.log("DB is connected");
    
}