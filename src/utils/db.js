import mongoose from 'mongoose';


  export const connectToDatabase = async() => {
      // Environmental Variables
    let { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

    let connectionString;

    if (DB_USER && DB_PASSWORD) {
      connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;
    } else {
      connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
    }
    
    // try {
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  }