import { catchAsync, AppError } from "#root/utils";
import User from "#root/models/users";
import { sign } from "./jsonwebtoken";

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  user.password = undefined;

  const token = sign({
    _id: user._id,
    displayName: user.displayName,
    email: user.email,
  });
  res.status(200).json({
    status: "success",
    message: "Giriş işlemi başarılı",
    token,
    data: user,
  });
});
