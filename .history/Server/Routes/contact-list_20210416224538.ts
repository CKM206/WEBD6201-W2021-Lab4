/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: *ROUTES* contact-list.ts
 *    Description: This is the Index Routing file that is responsible for handling the 
 *                Page routing to protected contact-list or related web pages.
 *                It is split into two main areas: GET requests and POST requests.
 *                GET requests often just render the page, while POST requests often
 *                require some back-end logic to take place before rendering.
 * 
  *               ALL logic & rendering actually takes place in the related Controller 
  *               file, this file simple handles the route, and calls the method from 
  *               the Controller.
 */

// Express Configuration
import express from 'express';
// Import the Required Display/Processing Methods from the Controller
import { DisplayContactListPage, DisplayEditPage, ProcessEditPage, 
         DisplayAddPage, ProcessAddPage, ProcessDeletePage  } 
         from '../Controllers/contact-list';
const router = express.Router();
export default router;

/************************ 
 * GET Page Requests (Displaying)
 ************************/

/**
 * Display the Contact-List Page
 */
router.get('/', DisplayContactListPage);

/**
 * Display the Update Page: EDIT
 */
router.get('/edit/:id', DisplayEditPage);

/**
 * Display the Update Page ADD
 */
router.get('/add', DisplayAddPage);

/**
 * "Display" The Delete Page
 */
router.get('/delete/:id', ProcessDeletePage);


/************************ 
 * POST Page Requests (Processing)
 ************************/

/**
 * Process the Update Page, EDIT
 */
router.post('/edit/:id', ProcessEditPage);

/**
 * Process the Update Page, ADD
 */
router.post('/add', ProcessAddPage);



