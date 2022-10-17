import mongoose from "mongoose";

// COLOCAR O LINK DO BD MONGO AQUI
mongoose.connect("");

let db = mongoose.connection;

export default db;
