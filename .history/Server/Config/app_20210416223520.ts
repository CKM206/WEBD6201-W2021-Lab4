/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: app.ts
 *    Description: This File is responsible for configuring the App. This File connects
 *                the rest of the Project so that the entire Application works as
 *                intended.
 */

/** 
 * Importing 3rd Party Modules
 */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

/** 
 *  Authentication Modules
 */
 import session from 'express-session';
 import passport from 'passport';
 import passportLocal from 'passport-local';
///-Authentication Objects
let localStrategy = passportLocal.Strategy; // Alias
import User from '../Models/user';
///-Authentication and Error Messaging 
import flash from 'connect-flash';



/** 
 *  Routing Configuration
 */
import indexRouter from '../Routes/index';  // Import the Index Router
import contactListRouter from '../Routes/contact-list';  // Import the Contact-list Router

const app = express();
export default app;

/** 
 *  Database Configuration
 */
 import * as DBConfig from './db';
 //- REMOTE DATABASE CONNECTION
 mongoose.connect(DBConfig.RemoteURI, {useNewUrlParser: true, useUnifiedTopology: true});
 //- LOCAL DATABASE CONNECTION
 //mongoose.connect(DBConfig.LocalURI, {useNewUrlParser: true, useUnifiedTopology: true});
 
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
   console.log(`Connected to MongoDB at: ${DBConfig.Host}`);
 });

/** 
 *  View Engine Setup
 */
app.set('views', path.join(__dirname, '../Views/'));  // Views is accessible from the 'views' path
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Fix Pathing
app.use(express.static(path.join(__dirname, '../../Client/')));
app.use(express.static(path.join(__dirname, '../../node_modules/')));

/** 
 *  Express Setup
 */
app.use(session
  ({
    secret: DBConfig.Secret,
    saveUninitialized: false,
    resave: false
}));

/** 
 *  Flash Initialization
 */
app.use(flash());

/** 
 *  Passport Initialization
 */
app.use(passport.initialize());
app.use(passport.session());

/** 
 *  Authentication (Local) Strategy
 */
 passport.use(User.createStrategy());

/** 
 *  User Data Serialization & Deserialization
 */
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());

/** 
 *  Router Configuration
 */
 import {AuthGuard} from '../Util/index';  // Import AuthGuard Function
 app.use('/', indexRouter);
 // Protect ALL routes in the Contact-list Router
 app.use('/contact-list', AuthGuard, contactListRouter);
 

/** 
 * Catch 404 Errors 
 */
app.use(function(req, res, next) {
  next(createError(404));
});

/** 
 *  Handle Errors
 */
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  let message = err.message;
  let type = err.statusCode;
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index', {message: message, error:error, type: type, title: '', page: '404', displayName: ''});
});
