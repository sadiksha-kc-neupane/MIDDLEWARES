class ExpressError extends Error {
  constructor(status = 500, message = "Something went wrong") {
    super(message);
    this.status = status;
  }
}

module.exports = ExpressError;
