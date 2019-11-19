/**
 * Module dependencies
 */

// ...


/**
 * create-dog.js
 *
 * Create dog.
 */
module.exports = async function createDog(req, res) {
    const dog = await Dog.create({ name: req.body.name, breed: req.body.breed }).fetch();
    res.send(dog);
};
