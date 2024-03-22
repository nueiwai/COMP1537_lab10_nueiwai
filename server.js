const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.listen(3000, () => {
  console.log("The server is listening on 3000");
});

app.get("/getWeatherForACityByName", (req, res) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);

      res.json(resp);
    })
    .catch((err) => {
      console.log(err);
    });
});