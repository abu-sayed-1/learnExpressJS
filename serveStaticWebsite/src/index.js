const express = require("express");
const path = require("path");

const app = express();
const staticPath = path.join(__dirname, "../public");

// builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello wold");
});

app.get("/about", (req, res) => {
    res.send("this is about");
});


app.listen(4000, () => {
    console.log("app listen by 4000")
});