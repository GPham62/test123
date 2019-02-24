const express = require('express');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const userModel = require('./userRouter');
const authRouter = express.Router();

authRouter.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))

authRouter.use(passport.initialize());
authRouter.use(passport.session());

authRouter.get('/', (req, res) =>{
    res.send('Auth success');
})

authRouter.get('/fb', passport.authenticate('facebook'));

authRouter.get('/fb/cb', passport.authenticate('facebook', {
    failureRedirect: '/', successRedirect: '/'
}))

passport.use( new facebookStrategy({
    clientID: "244906609795883",
    clientSecret: "1b52142fd5201bfd2c7ddc7162ebe5a2",
    callbackURL: "http://localhost:3000/api/auth/fb/cb"
},
(accessToken, refreshToken, profile, done) => {
    console.log(profile);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    userModel.findOne({id}, (err, user) => {
        done(null, user);
    })
})
module.exports = authRouter;