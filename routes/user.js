const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControler = require("../controllers/users.js")

router.get("/signup", userControler.renderSignupForm);

// signup
router.post("/signup", wrapAsync(userControler.signup));

router.get("/login", userControler.renderLoginForm);

router.post("/login", saveRedirectUrl,
    passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}),
    userControler.login
);

// log out router
router.get("/logout", 
    userControler.logout);

module.exports = router;