exports.getAll = (req, res, next) => {
  res.status(200).json({
    msg: "Getting all posts",
  });
};

exports.getOne = (req, res, next) => {
  res.status(200).json({
    msg: "Getting the post",
  });
};
