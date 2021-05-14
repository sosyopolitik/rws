import { catchAsync, AppError } from "#root/utils";
import User from "#root/models/users";
import { verify } from "./jsonwebtoken";

export const verifyToken = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError("Token alanı zorunludur.", 401));
  }

  const isVerifiedToken = verify(token);

  if (!isVerifiedToken) {
    return next(new AppError("Geçerli bir token bulunamadı.", 401));
  }

  res.status(200).json({
    status: "success",
    message: "Giriş işlemi başarılı",
    verifiedToken: isVerifiedToken,
  });
});
