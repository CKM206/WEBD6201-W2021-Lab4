/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: *UTIL* index.ts
 *    Description: This file holds utility methods that are used multiple times, or may
 *                be useful in multiple areas of the app.
 */

import express, {Request, Response, NextFunction} from 'express';

/** 
 *  Helper Function - Returns a displayName from an authenticated User OR
 *                  an empty string otherwise.
 */
export function UserDisplayName(req: Request): string
{
    if (req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}

/** 
 *  Authentication Guard
 */
export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if (!req.isAuthenticated())
    {
        return res.redirect('./login');

    }
    next();
}