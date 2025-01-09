exports.sendSuccess = (res, message, data = null) => {
    return res.status(200).json({
      status: "success",
      message,
      data,
    });
  };
  
  exports.sendError = (res, message, error = null) => {
    return res.status(500).json({
      status: "error",
      message,
      error,
    });
  };
  