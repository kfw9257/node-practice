/**
 * Module dependencies
 */

// ...


/**
 * get-dog.js
 *
 * Get dog.
 */
module.exports = async function getDog(req, res) {
  const dog = await Dog.find()
    .where({ id : req.params.id});
  res.send(dog);

};
