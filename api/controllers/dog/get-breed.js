/**
 * Module dependencies
 */

// ...


/**
 * get-breed.js
 *
 * Get breed.
 */
module.exports = async function getBreed(req, res) {
  const breed = await Dog.find()
    .where({ breed : req.params.type});
  res.send(breed);

};
