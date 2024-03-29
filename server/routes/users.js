const express=require('express');
const passport=require('passport');
const router=express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage, limits:{fileSize :10*1024*1024} });
const userController=require('../controllers/user_controller');
// const authentication=require('../controllers/authentication');
router.get('/signupadmin',userController.signupadmin);


router.get('/Sign-In',userController.signIn);
router.get('/sign-out',userController.DestroySession);
router.get('/admin/signin',userController.AdminSignIn);
// router.get('/users/Sign-In',userController.AdminsignIn);
router.get('/signup',userController.signup);
router.post('/create',userController.create);
router.post('/update',userController.update);
// router.get('/profile',userController.profile);
// this is for main for login from 21
router.post('/createSession',passport.authenticate(
    'local',//local passport session is used
    {failureRedirect:'/users/Sign-In'},
),userController.createSession)


// //get logged in user
router.get('/loggedin_user',userController.getLoggedInUser);

router.post('/get_user_google',userController.getUserGoogle);

router.post('/sendmail',userController.sendmail);

router.post('/reset_password',userController.sendResetMail);

router.post('/getuserbyemail',userController.getUserByEmail);



// router.post('/createsessionjwt',authentication.createSession);
module.exports=router;