import { APIFeatures, AppError, catchAsync } from "#root/utils";

export const createMany = (Model) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.insertMany(req.body);

    res.status(201).json({
      status: "success",
      docs,
    });
  });

export const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      doc,
    });
  });

export const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!doc) {
      return next(new AppError("Herhangi bir veri bulunamadı.", 404));
    }

    res.status(204).json({
      status: "success",
      doc,
    });
  });
export const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`${req.params.id} ile ilgili kayıt bulunamadı.`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      doc,
    });
  });
export const query = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(
      Model.find(),
      req.body,
      Model.countDocuments()
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const docs = await features.query;
    const counts = await features.countQuery;

    const totalPages = Math.ceil(counts / docs.length);

    res.status(200).json({
      status: "success",
      results: docs.length,
      totalDocs: counts,
      totalPages,
      docs,
    });
  });
export const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError(`${req.params.id} ile ilgili kayıt bulunamadı.`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      doc,
    });
  });
export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(
      Model.find(),
      req.query,
      Model.countDocuments()
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const docs = await features.query;
    const counts = await features.countQuery;

    const totalPages = Math.ceil(counts / req.query.limit);

    res.status(200).json({
      status: "success",
      results: docs.length,
      totalDocs: counts,
      totalPages,
      docs,
    });
  });
