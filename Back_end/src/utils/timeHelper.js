exports.formatDate = (date) => {
    return new Date(date).toLocaleString();
  };
  
  exports.getCurrentTime = () => {
    return new Date().toLocaleString();
  };
  