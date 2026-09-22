function logger(req, res, next) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${req.method} request made to ${req.url}`);
  next(); // don't forget this! it lets the request move forward
}

module.exports = logger;