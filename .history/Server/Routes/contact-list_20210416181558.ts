/**
 * Configure for Express
 */
import express from 'express';
import { DisplayContactListPage, DisplayEditPage, ProcessEditPage, 
         DisplayAddPage, ProcessAddPage, ProcessDeletePage  } from '../Controllers/contact-list';
const router = express.Router();
export default router;


/************************ 
 * Display Page Functions
 ************************/
/**
 * Display Contact-List Page
 */
router.get('/', DisplayContactListPage);

/**
 * Display the Update Page, EDITING
 */
/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', DisplayEditPage);

/**
 * Delete "Page"
 */
/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', ProcessDeletePage);

/**
 * Display the Update Page, ADDING
 */
/* Display add page - with /add */
router.get('/add', DisplayAddPage);



/************************ 
 * Process Page Functions
 ************************/