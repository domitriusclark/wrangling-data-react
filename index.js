const express = require("express");
const data = require('./client/src/utils/avariavs_data.json');
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// This route is serving our local json as an api route would
app.get("/test", function(req, res, next) {
  res.send(data);
});

app.listen(5000, () => console.log('Example app listening on port 3000!'))