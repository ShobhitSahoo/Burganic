require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const FormCollection = require("./models/model");

//set template engine
app.set("view engine", "hbs");

//static path
const public_path = path.join(__dirname, "../public");

//use that static path
app.use(express.static(public_path));

//dynamic path
const dynamic_path = path.join(__dirname, "../templateEngine/views");

//set views issue
app.set("views", dynamic_path);

//partials path
const partials_path = path.join(__dirname, "../templateEngine/partials");
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/index", (req, res) => {
    res.render("index");
})

app.post("/",  async(req , res) => {
    try {
        const insertData = new FormCollection({
            name : req.body.name,
            email : req.body.email,
            familySize : req.body.familySize
        })

        const data = await insertData.save();
        res.render("index");
    } catch (error) {
        console.log(error);
    }

})

app.post("/index",  async(req , res) => {
    try {
        const insertData = new FormCollection({
            name : req.body.name,
            email : req.body.email,
            familySize : req.body.familySize
        })

        const data = await insertData.save();
        res.render("index");
    } catch (error) {
        console.log(error);
    }

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`);
})

