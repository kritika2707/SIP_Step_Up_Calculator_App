const express = require("express");
const path = require("path");
const routes = require("./Routes/index");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
