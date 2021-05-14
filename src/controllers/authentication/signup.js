import Users from "#root/models/users";
import { catchAsync } from "#root/utils";
import { sign } from "./jsonwebtoken";

export const signup = catchAsync(async (req, res, next) => {
  const bodyData = {
    displayName: req.body?.displayName,
    email: req.body?.email,
    username: req.body?.username,
    password: req.body?.password,
  };
  const doc = new Users(bodyData);
  const user = await doc.save();

  user.password = undefined;
  const token = sign({
    _id: user._id,
    displayName: user.displayName,
    email: user.email,
  });
  res.status(201).json({
    status: "success",
    message: "Kayıt işlemi başarılı",
    token,
    doc: user,
  });
});
