var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

var chillies = [];
var count = 0;

app.get("/chillies", (req, res) => {
  res.send(chillies);
  console.log("get all chillies");
});

app.get("/chillies/:id", (req, res) => {
  console.log(`getting a chilli with id ${req.params.id}`);

  var chilliMatch = chillies.find((c) => c.id == req.params.id);


  if (chilliMatch) {
    res.send(chilliMatch);
  } else {
    res.sendStatus(400);
  }
});

app.post("/chillies", (req, res) => {

  const newChilli = { id: count, ...req.body };
  count = count + 1;

  chillies.push(newChilli);
  console.log(req.body);
  res.send(newChilli);
});

app.put("/chillies/:id", (req, res) => {
  var chilliIndex = chillies.findIndex((c) => c.id == req.params.id);

  if (chilliIndex != -1) {
    chillies[chilliIndex] = req.body;
    console.log(req.body);
    res.send(chillies[chilliIndex]);
  } else {
    res.sendStatus(400);
  }
});

app.delete("/chillies/:id", (req, res) => {
  console.log(`delete a chilli with id ${req.params.id}`);

  let deletedChilli = chillies.find((c) => c.id == req.params.id);

  if (!deletedChilli) {
    console.log("No chilli found");
    res.sendStatus(400);
  } else {
    chillies = chillies.filter((c) => c.id != req.params.id);
    res.send(deletedChilli);
  }
});

app.use("/", (req, res) => {
  res.sendStatus(404);
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
