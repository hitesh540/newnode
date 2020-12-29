const About = require("../models/about");

exports.about = (req, res) => {

    About.exec((err, about) => {
        if (err || !about) {
            return res.status(400).json({
                error: "Page not found"
            });
        }
        req.about = about;
        next();
    });


    
    
};



