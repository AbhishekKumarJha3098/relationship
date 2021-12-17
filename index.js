const express = require('express');
const path = require("path")
const app = express();
const author = require("./models/author.js")

app.use(express.json());

app.set('view engine', 'ejs');

const static = path.join(__dirname, "../public")
app.use(express.urlencoded({extended:false}))
app.use(express.static(static))

app.get("/author", (req, res) => {
  res.render("Author");
})


app.post("/author", async (req, res) => {
//   res.send(req.body)  
  const userData = new Packer(req.body);
  await userData.save();
  
});

module.exports = app;