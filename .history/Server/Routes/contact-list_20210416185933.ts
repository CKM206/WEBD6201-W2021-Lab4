/**
 * Configure for Express
 */
import express from 'express';
import { DisplayContactListPage, DisplayEditPage, ProcessEditPage, 
         DisplayAddPage, ProcessAddPage, ProcessDeletePage  } 
         from '../Controllers/contact-list';
const router = express.Router();
export default router;


/************************ 
 * Display Page Functions (GET REQUESTS)
 ************************/
/**
 * Display Contact-List Page
 */
router.get('/', DisplayContactListPage);
//router.get('/contact-list', DisplayContactListPage);

/**
 * Display the Update Page, EDITING
 */
router.get('/edit/:id', DisplayEditPage);

/**
 * Delete "Page"
 */
router.get('/delete/:id', ProcessDeletePage);

/**
 * Display the Update Page, ADDING
 */
router.get('/add', DisplayAddPage);


/************************ 
 * Process Page Functions (POST REQUESTS)
 ************************/

/**
 * Display the Update Page, EDITING
 */
router.post('/edit/:id', ProcessEditPage);

/**
 * Display the Update Page, ADDING
 */
router.post('/add', ProcessAddPage);
