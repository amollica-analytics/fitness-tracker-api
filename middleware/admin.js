/**
 * Admin Authorization Middleware
 * ---------------------------------------------------
 * This middleware ensures that only users with the
 * "admin" role can access certain routes.
 *
 * It should be used AFTER authenticateToken middleware,
 * since it relies on req.user being populated.
 */

function requireAdmin(req, res, next) {

  /**
   * Check the role stored in the authenticated user object.
   * If the role is not "admin", deny access.
   */
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" })
  }

  // If user is admin, allow request to proceed
  next()

}

// Export middleware
module.exports = requireAdmin