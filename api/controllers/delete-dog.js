/**
 * Module dependencies
 */

// ...


/**
 * delete-dog.js
 *
 * Delete dog.
 */
module.exports = async function deleteDog(req, res) {
    const deletedDog = await Dog.destroyOne({ id: req.params.id });
    res.send(deletedDog);
};
