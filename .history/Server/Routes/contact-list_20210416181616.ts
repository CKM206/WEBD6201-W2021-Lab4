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
 * Process Page Functions
 ************************/

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', ProcessEditPage);

/* Process edit/:id page - with /edit/:id */
router.post('/add', ProcessAddPage);
