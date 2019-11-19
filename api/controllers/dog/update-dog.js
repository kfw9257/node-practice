/**
 * Module dependencies
 */

// ...


/**
 * update-dog.js
 *
 * Update dog.
 */
module.exports = async function updateDog(req, res) {

  const updatedDog = await Dog.updateOne({ id: req.params.id })
    .set({
      name: req.body.name,
      breed: req.body.breed
    });
    res.send(updatedDog);

};
