import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY;
const expiresIn = process.env.JWT_EXPIRES_IN;

export const sign = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

export const verify = (token) => {
  return jwt.verify(token, secretKey);
};
