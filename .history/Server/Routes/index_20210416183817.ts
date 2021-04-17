// Express Configuration
import express from 'express';
const router = express.Router();
export default router;

// Create User Model Instance
import User from '../Models/user';

// Index Controller Instance
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, 
         DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, 
         ProcessLogoutPage, ProcessRegisterPage } from "../Controllers/index";

/************************ 
 * GET Page Requests
 ************************/

/* GET home (/) page - with / */
router.get('/', DisplayHomePage);

/* GET home page - with /home */
router.get('/home', DisplayHomePage);

/* GET about page - with /about */
router.get('/about', DisplayAboutPage);

/* GET services page - with /services */
router.get('/services', DisplayServicesPage);

/* GET projects page - with /projects */
router.get('/projects', DisplayProjectsPage);

/* GET contact page - with /contact */
router.get('/contact', DisplayContactPage);

/* GET login page - with /login */
router.get('/login', DisplayLoginPage);

/* GET register page - with /register */
router.get('/register', DisplayRegisterPage);

/************************ 
 * POST Page Requests
 ************************/

/* POST Login page - with /login */
router.post('/login', ProcessLoginPage);

/* Process logout page - with /logout */
router.get('/logout', ProcessLogoutPage);

/* POST Register page - with /register */
router.post('/register', ProcessRegisterPage);