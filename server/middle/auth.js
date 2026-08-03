// middleware/authenticate.js

import "dotenv/config"
import jwt from "jsonwebtoken";

const secret = process.env.JWT_ACCESS_SECRET; // same secret used to sign access tokens

function authenticateUser(req, res, next) {
    
    
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : req.cookies?.token;
 console.log("🔍 authenticateUser middleware HIT"); // temporary debug line
 console.log("🔍 authHeader:", authHeader);
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No access token provided" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid or expired token" });
    }
    req.user = decoded; // { id, email, username }
    next();
  });
}

export default authenticateUser;
