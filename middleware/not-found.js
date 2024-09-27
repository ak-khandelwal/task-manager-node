const not_found = (req,res) => res.status(404).send("page does not exist");

module.exports = not_found;