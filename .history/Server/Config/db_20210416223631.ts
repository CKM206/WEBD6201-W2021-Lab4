/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: db.ts
 *    Description: This File is responsible for setting up the connection with the 
 *                database.
 */

/**
 * Database Connection strings, Secret, and Host
 */
export const LocalURI = "mongodb://localhost/webd6201";
export const RemoteURI = "mongodb+srv://db_admin:CCYKMudtfcm4imv1@webd6201-lab4.quybr.mongodb.net/webd6201-lab4?retryWrites=true&w=majority"
export const Secret = "someSecret";

export const Host = "MongoDB Atlas";

/* module.exports = {
    Path: mongoDBPath,
    Secret: sessionSecret
}  */