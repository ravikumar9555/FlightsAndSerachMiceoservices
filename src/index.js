const express = require("express");
const {PORT} = require('./config/serverConfiq')
const bodyparser = require('body-parser')
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {
    
    const app = express();

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended: true }))

    app.listen(PORT , () => {
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();
        // repo.createCity({
        //     name : 'New Delhi'
        // })
        //repo.deleteCity(1);
     
    })
     
} 
setupAndStartServer(); 