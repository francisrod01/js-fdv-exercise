const usersService = require('../services/users');

const usersRouter = (router) => {
  // On routes that end in /users
  const users = router.route('/users');

  // On routes that end in /users/:id
  const user = router.route('/users/:id');


  // Get all users by parameters.
  users.get(usersService.all);

  // Create a user
  users.post(usersService.create);

  // Get the user by id.
  user.get(usersService.retrieve);

  // Update the user by id.
  user.put(usersService.update);

  // Delete the user by id.
  user.delete(usersService.deleteOne);
};

module.exports = usersRouter;
