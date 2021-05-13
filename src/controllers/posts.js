export const getAll = (req, res, next) => {
  res.status(200).json({
    msg: "Getting all posts",
  });
};

export const getOne = (req, res, next) => {
  res.status(200).json({
    msg: "Getting the post",
  });
};
