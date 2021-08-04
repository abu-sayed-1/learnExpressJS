const express = require("express");
const app = express();
// Follows the express CRUD operation
// CRUD full from => {
    // C = create
    // R = Read 
    // U = Update
    // D = Delete
// }

// app.get("route", ("callback") => {
//      res.send("hello wold");
// });


//We are going to do a read operation.
app.get("/", (req, res) => {
    res.send("hello wold");
});

app.get("/about", (req, res) => {
    res.send("this is about");
});

app.get("/contact", (req, res) => {
    res.send("this is contact");
});

// you must listen to app
app.listen(4000, () => {
    console.log("app listen by 4000")
})