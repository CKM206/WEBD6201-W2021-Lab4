import express, {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import * as DBConfig from '../Config/db';

// Helper Function
export function UserDisplayName(req: Request): string
{
    if (req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}

// Authentication Guard
export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if (!req.isAuthenticated())
    {
        return res.redirect('./login');

    }
    next();
}

export function GenerateToken(user: UserDocument): string
{
    const payload = 
        {
            id: user._id,
            displayName: user.displayName,
            username: user.username,
            emailAddress: user.emailAddress
        }

    const jwtOptions = 
        {
            expiresIn: 60480 // Expires in 1 week
        }

    return jwt.sign(payload, DBConfig.Secret, jwtOptions);    
}