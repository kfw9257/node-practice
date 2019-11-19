/**
 * Module dependencies
 */

// ...


/**
 * get-all-dogs.js
 *
 * Get all dogs.
 */
module.exports = async function getAllDogs(req, res) {

  const dogs = await Dog.find();
  res.send(dogs);

};
