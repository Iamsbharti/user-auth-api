exports.formatResponse = (error, message, data) => {
  let response = {
    error: error,
    message: message,
    data: data,
  };
  return response;
};
