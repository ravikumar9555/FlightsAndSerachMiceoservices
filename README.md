# Welcome to Flights Serach

## Project Setup
-Clone the Rpoject on your local
-Execute npm install on the same path as your root directory of tech download project
-Create a .env file in the root directory and add the following environment varaible
PORT:3000
-Inside the src/cnfig folder create a new file config.json and then add the following piece of json 

  
  "development": {
    "username": YOUR_DB_LOGIN_NAME,
    "password": YOURDBPASSWORD,
    "database": "Flights_Serach_DB_DEV",
    "host": "127.0.0.1", 
    "dialect": "mysql"
  }

  -Once you've added your db config as listed above , go to the src folder from your terminal and execute npx sequelize db:create