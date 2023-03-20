const path = require("path");
const serviceData = require('../Services/calculator');

const controlData = async (req, res)=>{

    try {
        
    

    const MonthlyInvestment = req.query.MonthlyInvestment;
    const Investmentperiod = req.query.InvestmentPeriod;
    const RateOfReturn = req.query.RateOfReturn;
    const YearlyIncrement = req.query.YearlyIncrement;

    // console.log(MonthlyInvestment);
    // console.log(Investmentperiod);
    // console.log(RateOfReturn);
    // console.log(YearlyIncrement);

    if(MonthlyInvestment < 500 || MonthlyInvestment > 100000 || Investmentperiod < 1 || Investmentperiod >30 || RateOfReturn < 1 || RateOfReturn > 30 || YearlyIncrement < 1 || YearlyIncrement > 12){
        return res.send("Invalid input ");
    }
    else{

//   console.log("data is ",req.query);
    const result = await serviceData(req.query);
    res.send({
        status:0,
        message: "Request Successful",
        fresult : result
    });
}
} catch (error) {
        res.send({
            status: -1,
            message : "Invalid inputs",
            fresult :error

        })
}
}


  module.exports = controlData;