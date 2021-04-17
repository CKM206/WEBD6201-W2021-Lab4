// Imports
import express, {Request, Response, NextFunction} from 'express';

// Create User Model Instance
import Contact from '../Models/contact';

// Helper Function
import {UserDisplayName } from '../Util/index';



/************************ 
 * Display Page Functions
 ************************/
/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
 export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
 {
     // db.contacts.find()
     Contact.find(function(err, contacts)
     {
       if(err)
       {
         return console.error("err");
       }
       return res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts,  displayName: UserDisplayName(req) });
     });
 }

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
 export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
 {
     let id = req.params.id;
 
   // pass the id to the db
 
   // db.contacts.find({"_id": id})
   Contact.findById(id, {}, {}, (err, contactToEdit) =>{
     if(err)
     {
       console.error(err);
       res.end(err);
     }
 
     // show the edit view
     return res.render('index', { title: 'Edit', page: 'update', id: id, contact: contactToEdit,  displayName: UserDisplayName(req) });
   });
 }

 /**
  * 
  * @param req 
  * @param res 
  * @param next 
  * @returns 
  */
 export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
 {
     return res.render('index', { title: 'Add', page: 'update', contact: '',  displayName: UserDisplayName(req) });
 }
 
 
 /************************ 
  * Process Page Functions
  ************************/
 /**
  * 
  * @param req 
  * @param res 
  * @param next 
  */
  export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
  {
     let id = req.params.id;
 
     // instantiate a new Contact
     let updatedContact = new Contact
     ({
       "_id": id,
       "FirstName": req.body.FirstName,
       "LastName": req.body.LastName,
       "ContactNumber": req.body.ContactNumber,
       "EmailAddress": req.body.EmailAddress
     });
   
     // db.contacts.update({"_id":id} and then update)
     Contact.updateOne({_id: id}, updatedContact, {}, (err) =>{
       if(err)
       {
         console.error(err);
         res.end(err);
       }
   
       return res.redirect('/contact-list');
     });
  }

  /**
   * 
   * @param req 
   * @param res 
   * @param next 
   */
  export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
  {
      // instantiate a new Contact
   let newContact = new Contact
   ({
    "FirstName": req.body.FirstName,
    "LastName": req.body.LastName,
    "ContactNumber": req.body.ContactNumber,
    "EmailAddress": req.body.EmailAddress
   });
 
   // db.contacts.insert({contact data is here...})
   Contact.create(newContact, (err) => {
     if(err)
     {
       console.error(err);
       res.end(err);
     }
 
     res.redirect('/contact-list');
   });
  }

  /**
   * 
   * @param req 
   * @param res 
   * @param next 
   */
  export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
  {
     let id = req.params.id;
 
     // db.contacts.remove({"_id: id"})
     Contact.remove({_id: id}, (err) => {
       if(err)
       {
         console.error(err);
         res.end(err);
       }
   
       res.redirect('/contact-list');
     });
  }