const User = require('../schemas/user');


const all = (req, res, next) => {
  User.find(req.query, {})
    .exec((err, users) => {
      if (err) res.send(err);

      res.json(users);
    });
};

const create = (req, res, next) => {
  // Create a new instance of the User model.
  const user = new User();

  // Create a service object data.
  const reqData = req.body;

  user.name = reqData.name;
  user.surname = reqData.surname;
  user.country = reqData.country;
  user.birthday = reqData.birthday;

  user.save((err) => {
    if (err) res.send(err);

    res.json({
      message: 'user.saved_successfully',
      user
    });
  });
};

const retrieve = (req, res, next) => {
  User.findById(req.params.id)
    .exec((err, user) => {
      if (err) res.send(err);

      res.json(user);
    });
};

const update = (req, res, next) => {
  // Use the user model to find the user we want.
  User.findById(req.params.id, (err, user) => {
    if (err) res.send(err);

    // Update the user data.
    const reqData = req.body;

    user.name = reqData.name;
    user.surname = reqData.surname;
    user.country = reqData.country;
    user.birthday = reqData.birthday;

    // Save the user object data.
    user.save((err2) => {
      if (err2) res.send(err2);

      res.json({
        message: 'user.updated_successfully',
        user
      });
    });
  });
};

const deleteOne = (req, res, next) => {
  User.remove({ _id: req.params.id }, (err, user) => {
    if (err) res.send(err);

    res.json({
      message: 'user.deleted_successfully'
    });
  });
};

module.exports = {
  all,
  create,
  retrieve,
  update,
  deleteOne
};
