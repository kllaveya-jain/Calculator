const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
   var n1 = Number(req.body.num1);
   var n2 = Number(req.body.num2);
   var result = n1 + n2;
   res.send("The result is " + result);
});


app.get("/bmicalculator", function (req, res) {
   res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
   var wt = Number(req.body.weight);
   var ht = Number(req.body.height);
   var result = wt / (ht * ht);
   res.send("Your BMI is " + result);
});
app.listen(3000, function () {
   console.log("Server is running at port 3000.");
});
