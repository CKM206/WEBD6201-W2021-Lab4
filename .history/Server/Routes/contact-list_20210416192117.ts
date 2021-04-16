// Express Configuration
import express from 'express';
import { DisplayContactListPage, DisplayEditPage, ProcessEditPage, 
         DisplayAddPage, ProcessAddPage, ProcessDeletePage  } from '../Controllers/contact-list';
const router = express.Router();
export default router;

/************************ 
 * Get Page Requests
 ************************/

/* Display Contact-List Page */
router.get('/', DisplayContactListPage);

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', DisplayEditPage);

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', ProcessDeletePage);

/* Display add page - with /add */
router.get('/add', DisplayAddPage);

/************************ 
 * Post Page Requests
 ************************/

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', ProcessEditPage);

/* Process edit/:id page - with /edit/:id */
router.post('/add', ProcessAddPage);



