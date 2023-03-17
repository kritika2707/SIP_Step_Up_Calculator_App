const path = require("path");
const serviceData = require('../Services/calculator');

const controlData = async (req, res)=>{
  console.log(req.query);
    const result = await serviceData(req.query);
    res.send({
        status:0,
        message: "Request Successful",
        fresult : result
    });
}

  module.exports = controlData;