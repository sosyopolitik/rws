export const getAll = (req, res, next) => {
  res.status(200).json({
    msg: "Getting all users",
  });
};

export const getOne = (req, res, next) => {
  res.status(200).json({
    msg: "Getting the user",
  });
};
