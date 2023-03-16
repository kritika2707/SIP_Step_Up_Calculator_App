const path = require("path");
const serviceData = require('../Services/calculator');

const controlData = async (req, res) => {
    // if(!req.query)
    // return res.send("Data not send");
    // console.log(req.query);
    const result = await serviceData(req.query);
    // console.log(result);
    // return res.send({ 
    //   message: "Hello from server!" });
    // console.log(result,"Controller");
    res.send(result);
  }

  module.exports = controlData;