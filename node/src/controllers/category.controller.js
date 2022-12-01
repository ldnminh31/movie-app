const CategoryService = require("../services/category.service");
const ApiError = require("../api-error");

// Category controller
exports.addCategory = async (req, res, next) => {
  if (!req.body?.category_name) {
    return next(new ApiError(400, "Name can not be empty"));
  }
  try {
    const categoryService = new CategoryService();
    const category = await categoryService.addCategory(req.body);
    return res.send(category);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the Category")
    );
  }
};
exports.category = async (req, res, next) => {
  let categories = [];
  try {
    const categoryService = new CategoryService();
    const { category_name } = req.query;
    if (category_name) {
      categories = await categoryService.findByCategoryName(category_name);
    } else {
      categories = await categoryService.category();
    }
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retrieving the categories")
    );
  }
  return res.send(categories);
};

exports.findCategory = async (req, res, next) => {
  try {
    const categoryService = new CategoryService();
    const category = await categoryService.findByCategoryId(
      req.params.category_id
    );
    if (!category) {
      return next(new ApiError(404, "category not found"));
    }
    return res.send(category);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `Error retrieving category with id=${req.params.category_id}`
      )
    );
  }
};
exports.updateCategory = async (req, res, next) => {
  if ((Object.keys(req.body).length = 0)) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const categoryService = new CategoryService();
    const categoryUpdated = await categoryService.updateCategory(
      req.params.category_id,
      req.body
    );
    if (!categoryUpdated) {
      return next(new ApiError(404, "Category not found"));
    }
    return res.send({
      message: "Category was updated successfully",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `Error retrieving category with id=${req.params.category_id}`
      )
    );
  }
};

exports.deleteCategory = async (req, res, next) => {
    try {
      const categoryService = new CategoryService();
      const categoryDeleted = await categoryService.deleteCategory(Number(req.params.category_id));
      if (!categoryDeleted) {
        return next(new ApiError(400, "Category not found"));
      }
      return res.send({
        message: "Category was deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return next(
        new ApiError(500, `Error deleting Category with id=${req.params.category_id}`)
      );
    }
  };
