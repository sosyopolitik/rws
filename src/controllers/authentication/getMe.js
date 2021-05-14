export const getMe = (req, res, next) => {
  res.status(200).json({
    message: "Kullanıcı bilgileri getirildi.",
    data: { displayName: "", avatar: "default.jpeg" },
  });
};
