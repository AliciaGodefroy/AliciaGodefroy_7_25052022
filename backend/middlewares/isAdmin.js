const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decodedToken.userId;
    User.findOne({
      where: {
        id: userId
      }
    })
      .then(user => {
        if (user.isAdmin == true || user.id == userId) {
          next();
        }
        else {
          throw 'Not Admin';
        }
      })
      .catch(error => res.status(400).json({ error }));
  }
  catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};