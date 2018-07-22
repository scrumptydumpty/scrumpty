const express = require('express');

const router = express.Router();
const passport = require('passport');

router.post('/', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { 
            console.log(err);
            res.send(false);
            return
         }
        if (!user) { 
            console.log('user login failed')
            return res.send(false);
         }
        req.logIn(user, function (err) {
            if (err) { 
                console.log(err);
                return next(err); }
            return res.send({id:user.id, username:user.username});
        });
    })(req, res, next);
});

module.exports = router;
