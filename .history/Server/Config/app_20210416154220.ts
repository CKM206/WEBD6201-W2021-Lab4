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
 *  App Configuration
 */
import indexRouter from '../Routes/index';

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
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Fix Pathing
app.set('views', path.join(__dirname, '../Views/'));  // Views is accessible from the 'views' path
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
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {message: message, error:error, title: '', page: '', displayName: ''});
});

