/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: *ROUTES* index.ts
 *    Description: This is the Index Routing file that is responsible for handling the 
 *                Page routing.It is split into two main areas: GET requests and POST 
 *                requests.GET requests often just render the page, while POST requests 
 *                often require some back-end logic to take place before rendering.
 * 
 *               ALL logic & rendering actually takes place in the related Controller 
 *               file, this file simple handles the route, and calls the method from 
 *               the Controller.
 */ 

// Express Configuration
import express from 'express';
const router = express.Router();
export default router;

// Import the Required Display/Processing Methods from the Controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, 
         DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, 
         ProcessLogoutPage, ProcessRegisterPage } from "../Controllers/index";

/************************ 
 * GET Page Requests (Displaying)
 ************************/

/**
 * Display The Home Page
 */
router.get('/', DisplayHomePage);

/**
 * Display The Home Page
 */
router.get('/home', DisplayHomePage);

/**
 * Display The About Page
 */
router.get('/about', DisplayAboutPage);

/**
 * Display The Services Page
 */
router.get('/services', DisplayServicesPage);

/**
 * Display The Projects Page
 */
router.get('/projects', DisplayProjectsPage);

/**
 * Display The Contact-Us Page
 */
router.get('/contact', DisplayContactPage);

/**
 * Display The Login Page
 */
router.get('/login', DisplayLoginPage);

/**
 * Display The Register Page
 */
router.get('/register', DisplayRegisterPage);

/************************ 
 * POST Page Requests (Processing)
 ************************/
/**
 * Process The Login Page
 */
router.post('/login', ProcessLoginPage);

/**
 * Process The Logout "Page"
 */
router.get('/logout', ProcessLogoutPage);

/**
 * Process The Register Page
 */
router.post('/register', ProcessRegisterPage);