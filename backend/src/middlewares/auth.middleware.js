import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  const token = req.cookies.jwt; 

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; 
    next();
  } catch (error) {
    console.error("JWT error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};
