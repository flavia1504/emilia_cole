const express = require("express")
const app = express ();
const path = require("path");
app.listen(3030, () => console.log("esto fue exitoso"));



app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views/index.html"))
});


app.get("/emilia-home", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/emilia.html"))
});

app.get("/music", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/music.html"))
});

app.get("/contact", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/contact.html"))
});

app.get("/emilia-about", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/about-emilia.html"))
});

app.use(express.static("public"));


