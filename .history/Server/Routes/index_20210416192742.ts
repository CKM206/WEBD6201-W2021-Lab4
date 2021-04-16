// Express Configuration
import express from 'express';
const router = express.Router();
export default router;

// Index Controller Instance
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, 
         DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, 
         ProcessLogoutPage, ProcessRegisterPage } from "../Controllers/index";

/************************ 
 * GET Page Requests
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
 * POST Page Requests
 ************************/

/* POST Login page - with /login */
router.post('/login', ProcessLoginPage);

/* Process logout page - with /logout */
router.get('/logout', ProcessLogoutPage);

/* POST Register page - with /register */
router.post('/register', ProcessRegisterPage);