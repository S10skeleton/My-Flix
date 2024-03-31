const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'mysecretssshhhhhhh'; // Fallback to a default secret (not recommended for production)

const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: '10h' });
};

module.exports = {
  authMiddleware: function (req, res, next) {
    if (!req || !req.headers) {
      console.error('Request object is missing or malformed');
      // Depending on your application's needs, you can handle the error or call next() to continue
      return res.status(500).send('Internal Server Error'); // Example error handling
    }

    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return next(); // No token, continue to next middleware without user data
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.error('Invalid token:', err.message);
    }

    return req; // Return the request object with or without user data
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
