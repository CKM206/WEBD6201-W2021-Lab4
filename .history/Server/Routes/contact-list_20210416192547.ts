// Express Configuration
import express from 'express';
import { DisplayContactListPage, DisplayEditPage, ProcessEditPage, 
         DisplayAddPage, ProcessAddPage, ProcessDeletePage  } 
         from '../Controllers/contact-list';
const router = express.Router();
export default router;

/************************ 
 * Get Page Requests
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
 * Post Page Requests
 ************************/

/**
 * Process the Update Page, EDIT
 */
router.post('/edit/:id', ProcessEditPage);

/**
 * Process the Update Page, ADD
 */
router.post('/add', ProcessAddPage);



