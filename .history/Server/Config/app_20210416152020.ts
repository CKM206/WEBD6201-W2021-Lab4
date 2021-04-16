/** 
 * Importing 3rd Party Modules
 */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

/** 
 *  App Configuration
 */
import indexRouter from '../Routes/index';

const app = express();
export default app;




/** 
 *  View Engine Setup
 */
app.set('views', path.join(__dirname, '../Views/'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client/')));
app.use(express.static(path.join(__dirname, '../../node_modules/')));

app.use('/', indexRouter);

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

