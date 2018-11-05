const greeter = (req, res) => {
    const person = req.params.person;
    res.json({hello: person});
}

// export default greeter;
module.exports = greeter;