const CommentService = require("../services/comment.service");
const ApiError = require("../api-error");

// Comment controller
exports.addComment = async (req, res, next) => {
  if (!req.body?.content) {
    return next(new ApiError(400, "comment can not be empty"));
  }
  try {
    const commentService = new CommentService();
    const comment = await commentService.addComment(req.body);
    return res.send(comment);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the comment")
    );
  }
};

exports.comment = async (req, res, next) => {
  let comments = [];
  try {
    const commentService = new CommentService();
    const { content } = req.query;
    if (content) {
      comments = await commentService.findByContent(content);
    } else {
      comments = await commentService.comment();
    }
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retrieving the comments")
    );
  }
  return res.send(comments);
};
exports.updateComment = async (req, res, next) => {
  if ((Object.keys(req.body).length = 0)) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const commentService = new CommentService();
    const commentUpdated = await commentService.updateComment(
      req.params.comment_id,
      req.body
    );
    if (!commentUpdated) {
      return next(new ApiError(404, "comment not found"));
    }
    return res.send({
      message: "comment was updated successfully",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `Error retrieving comment with id=${req.params.comment_id}`
      )
    );
  }
};
exports.deleteComment = async (req, res, next) => {
  try {
    const commentService = new CommentService();
    const commentDeleted = await commentService.deleteComment(req.params.comment_id);
    if (!commentDeleted) {
      return next(new ApiError(400, "Comment not found"));
    }
    return res.send({
      message: "Comment was deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error deleting Comment with id=${req.params.comment_id}`)
    );
  }
};
