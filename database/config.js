const mongoose = require("mongoose");


const dbConnection = async() =>{
    try{

        await mongoose.connect(process.env.DB_CNN);
        console.log('db_online')

    }catch(err){
        console.log('Error initializing db')
    }
}

module.exports = {
    dbConnection
}