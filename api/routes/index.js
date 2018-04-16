const indexRouter = (router) => {
  // Test route to make sure everything is working.
  router.get('/', (req, res, next) => {
    res.json({
      message: 'hooray! Welcome to our API!'
    });
  });
};

module.exports = indexRouter;
