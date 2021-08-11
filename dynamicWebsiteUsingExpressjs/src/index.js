const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 4000;
const partialsPath = path.join(__dirname, "../templates/partials");
const templatePath = path.join(__dirname, "../templates/views");

// to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        authName: "auth: AS Rakib"
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/blog", (req, res) => {
    res.render("blog")
})

app.get("*", (req, res) => {
    res.render("pageNotFound", {
        error: "Oops Page not Found ):"
    })
})

app.listen(port, () => {
    console.log("server listen by 4000")
})