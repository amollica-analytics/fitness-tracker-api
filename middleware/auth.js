/**
 * Authentication Middleware
 * ---------------------------------------------------
 * This middleware verifies that a request contains
 * a valid JSON Web Token (JWT).
 *
 * If the token is valid, the decoded user information
 * is attached to the request object and the request
 * continues to the next middleware or route handler.
 *
 * If the token is missing or invalid, access is denied.
 */
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

function authenticateToken(req, res, next) {

  /**
   * Retrieve the Authorization header.
   * Expected format:
   * Authorization: Bearer <token>
   */
  const authHeader = req.headers['authorization']

  /**
   * Extract the token from the header.
   * Splitting removes the "Bearer" prefix.
   */
  const token = authHeader && authHeader.split(' ')[1]

  // If no token is provided, return 401 Unauthorized
  if (!token) {
    return res.sendStatus(401)
  }

  /**
   * Verify the token using the secret key stored
   * in environment variables.
   */
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

    // If token verification fails, return Forbidden
    if (err) return res.sendStatus(403)

    /**
     * Attach decoded user data to the request object.
     * This allows routes to access user information
     * such as user id or role.
     */
    req.user = user

    // Continue to next middleware or route
    next()

  })
}

// Export middleware for use in protected routes
module.exports = authenticateToken