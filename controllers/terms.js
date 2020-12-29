const Terms = require("../models/terms");

exports.terms = (req, res) => {

    terms.exec((err, terms) => {
        if (err || !terms) {
            return res.status(400).json({
                error: "Page not found"
            });
        }
        req.terms = terms;
        next();
    });


    
    
};



