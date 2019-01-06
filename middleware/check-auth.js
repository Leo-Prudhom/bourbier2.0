const jwt = require('jsonwebtoken');
const key = require('../../config/keys').JWT_KEY;

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, key);
        req.userData = decoded;
        next();
    } catch {
        return res.status(401).json({
            message : 'Auth failed 401'
        });
    }
};