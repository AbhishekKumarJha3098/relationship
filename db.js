const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(
        'mongodb+srv://abhishek123@cluster0.ra6dd.mongodb.net/porter'
    );
};