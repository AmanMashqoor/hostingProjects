import express from "express";
import cors from "cors";
import {PORT, mongoDBURL} from "./config.js"; 
import mongoose from "mongoose";
import auth from './routes/auth.js'
// import sponsorRoute from './routes/sponsorRoute.js';
import errorHandler from './middleware/errorHandler.js';
import undefinedRouteHandler from './middleware/undefinedRoute.js';

const app = express();

//Middleware for pasing request body
app.use(express.json());

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT, () =>{
        console.log(`App is listening to port: ${PORT}`);
});
})
.catch((error)=>{
    console.log(error);
});

//Middleware for handling CORS Policy
//Option 1: Allow all origins with Default of cors(*) 
// app.use(cors());

// Option 2: Allow custom origins
const origin = ['https://65853ebd58d63a9a9720bb33--grand-palmier-d75ed1.netlify.app', 'https://sponsorserver.onrender.com']; //https://server-backend-ujq6.onrender.com 
app.use(cors({
  origin: (origin, callback) => {
    if (origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }}
}));  

app.get('/express', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial')
})

app.use('/auth', auth) //for signup and login authentication

// app.use('/sponsor', sponsorRoute); //for performing CRUD operations within the website 

// Apply the middleware for handling undefined routes
app.use(undefinedRouteHandler);

// Apply the error handling middleware
app.use(errorHandler);