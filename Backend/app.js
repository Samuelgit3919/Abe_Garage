// database username and password
// const dbUsername =  'abegarage';
// const dbPassword =  'AbeGarage@3919';


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
// import db from './config/db.config.js';
 
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// export db for use in other files
 export default app;