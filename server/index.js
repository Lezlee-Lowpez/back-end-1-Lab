// import the package express into our file
const express = require("express");


//  import the package cors into our file
const cors = require("cors");

//setting the invocation
const app = express();

// the line that translates the objects into javascript and vice versa
app.use(express.json());

//this allows our express server to use the cors package
app.use(cors());

// This is an EndPoint
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

// app.get("/weather/:temperature", (req,res) => {
//     const phrase = `<h3>It was ${req.params.temperature</h3>`;
//     res.status(200).send(phrase)
// })

app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params; 
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase)
})


app.listen(4000, () => console.log("Server running on port 4000"));



