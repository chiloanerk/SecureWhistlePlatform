require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") }); // Adjusted path
const jwt = require("jsonwebtoken");

function createAccessToken(user_id, sessionId) {
    return jwt.sign({id: user_id, sessionId: sessionId}, process.env.JWT_SECRET, {
        expiresIn: '15m',
    })
}

function createRefreshToken(user_id) {
    return jwt.sign({id: user_id}, process.env.JWT_REFRESH_SECRET, {expiresIn: '7d'});
}

module.exports = {
    createAccessToken,
    createRefreshToken,
};