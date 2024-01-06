const User = require('../models/user');
// const Child = require('../models/child');
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const axios = require('axios');
const fastcsv = require('fast-csv');
const bcrypt = require('bcrypt');
const OpenAI = require('openai');
// import OpenAI from 'openai';
module.exports.profile = function (req, res) {
    // return res.render('user_profile', {
    //     title: 'User Profile'
    // })
    return res.status(200).send("profile page");
}

module.exports.getUserGoogle = async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(200).send(user);
        }
        else {
            return res.status(200).send("user doesn't exist");
        }
    } catch (err) {
        console.log(err)
        return res.status(200).send("error in getting user");
    }
}
module.exports.sendmail = async (req, res) => {
    const { password, name, email } = req.body;

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "sakshamgangrade227@gmail.com",
            pass: "xcbtdspebzjrouki"
        }
    });
    const mailOptions = {
        from: "sakshamgangrade227@gmail.com",
        to: email,
        subject: "Welcome to Our Application",
        text: `Hello ${name},\n\nWelcome to our application! Your account has been created successfully.\n\nYour login credentials:\nEmail: ${email}\nPassword: ${password}\n\nThank you!`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "User created and email sent successfully" });
    } catch (error) {
        console.log("Error sending email: ", error);
        res.status(200).json({ error: "Failed to send email" });
    }
};


module.exports.create = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            let newuser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                zone: req.body.zone,
                address: req.body.address,
                aadharCardNo: req.body.aadharCardNo,
                contactNo: req.body.contactNo
            });

            await axios.post('http://localhost:3000/users/sendmail', {
                password: req.body.password,
                name: req.body.name,
                email: req.body.email,
            });
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            newuser.password = hashedPassword;
            await newuser.save();
            return res.status(200).send(newuser);
        } else {
            return res.status(200).send("User already exists");
        }
    } catch (err) {
        console.log("Error creating user: ", err);
        return res.status(500).send("Error in creating user");
    }
};


// no
module.exports.signIn = function (req, res) {
    if (req.isAuthenticated()) {
        // return res.redirect('/users/profile');
        return res.status(200).send("user is authenticated");
    }

    // return res.render('UserSignIn',{
    //     title:"Sign In Page"
    // });
    return res.status(200).send("user is not authenticated");
}
module.exports.signup = function (req, res) {
    if (req.isAuthenticated()) {
        // return res.render('signup',{
        //     title:"add employees"
        // });
        return res.status(200).send("you can now add employees");
    }

    // return res.render('UserSignIn',{
    //     title:"Sign In Page"
    // });
    return res.status(200).send("you are not signed in");
}
module.exports.AdminSignIn = function (req, res) {
    if (req.isAuthenticated()) {
        return res.status(200).send("you are now logged in");
    }

    // return res.render('AdminSignIn',{
    //     title:"Sign In Page"
    // });

    return res.status(200).send("you are not signed in");
}
//sign in and create session for the user
module.exports.createSession = function (req, res) {
    return res.status(200).send(req.user);
}

module.exports.DestroySession = function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.status(200).send("successfully logged out");
    });
}

module.exports.signupadmin = function (req, res) {
    // return res.render('signupadmin',{
    //     title:'signupadmin'
    // });
    return res.status("admin signed up");
}
module.exports.getLoggedInUser = function (req, res) {
    if (req.isAuthenticated) {
        return res.status(200).json({ response: req.user });
    }
    return res.status(200).send("log in first");
}
// no
module.exports.update = async function (req, res) {
    // console.log(req.body)
    // if(req.body.password!=req.body.confirmpassword)
    // {
    // return res.status(404).send("password doesn't matches");
    // }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.zone = req.body.zone;
            user.address = req.body.address;
            user.aadharCardNo = req.body.aadharCardNo;
            user.contactNo = req.body.contactNo;
            user.save();

            return res.status(200).json({ "response": user });
        } else {
            return res.status(200).send("create user");

        }
    } catch (err) {
        res.status(200).send("error in updating user");
    }
}






module.exports.sendResetMail = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            if (!user.email) return res.status(200).send("email doesn't exists");
            // console.log(user.email);
            const newPassword = crypto.randomBytes(4).toString("hex");
            // console.log(newPassword);
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            await user.save();
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "sakshamgangrade227@gmail.com",
                    pass: "xcbtdspebzjrouki"
                }
            });
            const mailOptions = {
                from: "sakshamgangrade227@gmail.com",
                to: user.email,
                subject: "Reset Password",
                text: `Hello ${user.name},\n\nYou have your new password .\n\nYour login credentials:\nEmail: ${user.email}\nPassword: ${newPassword}\n\nThank you!`,
            };
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "User created and email sent successfully" });
        }
        else {
            return res.status(200).send("user doesn't exists");
        }

    } catch (error) {
        console.log("Error sending email: ", error);
        res.status(200).json({ error: "Failed to send email" });
    }
};



module.exports.getUserByEmail = async function (req, res) {
    try {
        let users = await User.findOne({ email: req.body.user_id });
        // console.log(users)
        return res.status(200).json({ response: users });
    } catch (err) {
        return res.status(200).send("error in getting all users");
    }
}
