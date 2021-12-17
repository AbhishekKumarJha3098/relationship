const {
    Schema,
    model
} = require("mongoose");

const productSchema = new Schema({
 
    book_name: {
        type: String,
        required: true
    },
    author_name: {
        type: Stri,
        required: true
    },
    checkout_time: {
        type: Number,
        required:true
    },

 
    versionKey: false,
    timestamps: true

});

const author = model("author", authorSchema);

module.exports = author;
