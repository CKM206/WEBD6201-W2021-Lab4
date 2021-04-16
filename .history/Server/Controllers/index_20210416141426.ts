// Imports
import express, {Request, Response, NextFunction} from 'express';
import passport from 'passport';

// Create User Model Instance
import User from '../Models/user';

// Helper Function
import {UserDisplayName, GenerateToken} from '../Util/index';



/************************ 
 * Display Page Functions
 ************************/
export function DisplayHomePage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req) });
}

export function DisplayLoginPage(req:Request, res:Response, next:NextFunction): void
{
    // Check if a user is logged in.
    //-If not, render the login page, otherwise redirect to contact-list
    if (!req.user)
        return res.render('index', 
        { 
            title: 'Login', 
            page: 'login',
            messages: req.flash('loginMessage'), 
            displayName: UserDisplayName(req)
        });
    
    
    return res.redirect("/contact-list");
}

export function DisplayRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    // Check if a user is logged in.
    //-If not, render the login page, otherwise redirect to contact-list
    if (!req.user)
        return res.render('index', 
        { title: 'Register', 
        page: 'register', 
        messages: req.flash('registerMessage'),  
        displayName: UserDisplayName(req)     
    });

    return res.redirect("/contact-list");
}


/************************ 
 * Process Page Functions
 ************************/
 
export function ProcessLoginPage(req:Request, res:Response, next:NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        // Check for Server Errors
        if (err)
        {
            console.error(err);
            return next(err);
        }
        // Check for Login Errors
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => {
            // Check for Database Errors
            if (err)
            {
                console.error(err);
                return next(err);
            }

            

            const authToken = GenerateToken(user);
            console.log("WHY NO LOG?!?!");

            // If we used a Front-End (Anglular, React, Vue)
            //return res.json({success: true, msg: 'User Logged in Successfully!', 
            //                 user: user, token: authToken});

            // We arent, so we just redirect
            return res.redirect('/contact-list');
        });
    })(req, res, next);
    
}

export function ProcessLogoutPage(req:Request, res:Response, next:NextFunction): void
{
    req.logout();
    console.log("User Logged Out.");

    // If we used a Front-End (Anglular, React, Vue)
    //return res.json({success: true, msg: 'User Logged Out Successfully!'});

    //Since we dont, just redirect
    res.redirect("/login");
}
 
export function ProcessRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    // Instantiate a User object
    let newUser = new User
    ({
        username: req.body.Username,
        emailAddress: req.body.EmailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });

    User.register(newUser, req.body.Password, (err) => {
        // Check for Server Errors
        if (err)
        {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError")
            {
                req.flash('registerMessage', 'Registration Error');
                console.error('Error: User Already Exists');
            }
            return res.redirect('/register');
        }

        // If we used a Front-End (Anglular, React, Vue)
        //return res.json({success: true, msg: 'User Registered in Successfully!'});

        // Since we done use a front end, just authenticate and redirect
        // Automatically Authenticate the User
        return passport.authenticate('local')(req, res, () => {
            //return res.json({success: true, msg: 'User Logged in Successfully!', user: newUser, token: GenerateToken(user)});
            return res.redirect('/contact-list');
        });


    });

}

export function ProcessContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}