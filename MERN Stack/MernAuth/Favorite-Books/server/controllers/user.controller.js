const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports.register = (req, res) => {
    User.create(req.body)
    .then(user => {
        const userToken = {
            id: user._id,
            token : jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY)}

        res
            .cookie("usertoken", userToken, "secret", {
                httpOnly: true
            })
            .json({ msg: "success!", user: user, token: userToken});
    })
    .catch(err => res.json(err));
}

module.exports.login = async(req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }

    const userToken = {
        id: user._id,
        token : jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY)}

    res.cookie("usertoken", userToken, "secret", {
            httpOnly: true
        })
        .json({ msg: "success!", token: userToken});
}

module.exports.addBook = (req, res) => {
    const { id } = req.body
    User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {BookId: id}}, {new:true, runValidators:true})
        .then(updatedUser => {
            console.log(updatedUser)
            res.json(updatedUser)
        })
        .catch(err => res.status(400).json(err));
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}