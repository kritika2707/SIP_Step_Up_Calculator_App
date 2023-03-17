import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

function toIndianRupees(sum){
  return sum.toString().replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
}

function Graph({MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement}){
    const graph = [
      {
       years: 0,
       sipStepUp: 0,
       investment: 0
      }
    ];
    let PeriodInMonth = InvestmentPeriod*12;
    RateOfReturn = (RateOfReturn)/1200;
    let incrementedAmount = 0, TotalSIPWithStepUp =0 , CummulationAmount=0,MonthlyInvest=0;
    for(let i=1; i<=PeriodInMonth; i++)
    {        
    if(i!==1 && i%12==1)
    {
    incrementedAmount=Math.floor(MonthlyInvestment*(YearlyIncrement/100));
    MonthlyInvestment=MonthlyInvestment + incrementedAmount
    }
    
    MonthlyInvest += MonthlyInvestment;
    CummulationAmount =MonthlyInvestment*(Math.pow((1+RateOfReturn),(PeriodInMonth-i+1)));  
    TotalSIPWithStepUp += CummulationAmount;       
    if(i%12==0){
      const obj = {
       years: i/12,
       sipStepUp: Math.round(TotalSIPWithStepUp),
       investment: Math.round(MonthlyInvest)
      }
      graph.push(obj)
      }      
    }

  return (
  <>
      <div className="graphi">
      <div className="textforgraph">
    <span >
      After{" "}
      <span className="AfterYearsOf"> {InvestmentPeriod} year's</span>{" "}
      you will have
    </span>
    <h2 >
      <CurrencyRupeeIcon />
      {toIndianRupees(TotalSIPWithStepUp.toFixed(0))}
    </h2>
    <p >
      That's
      <span className="currencyRupeeInPara">
        <CurrencyRupeeIcon />
        {toIndianRupees((TotalSIPWithStepUp - MonthlyInvest).toFixed(0))}
      </span>{" "}
      as potential capital gains on your investment of
      <span className="currencyRupeeInPara2">
        <CurrencyRupeeIcon />
        {toIndianRupees(MonthlyInvest.toFixed(0))}
      </span>
    </p>
    </div>
    <ResponsiveContainer className="graph-div" width="90%" aspect={1.6}>
        <LineChart
          width={550}
          height={550}
          min={0}
          max={5000000}
          data={graph}
          >
          <XAxis dataKey="years"/>
          <YAxis dataKey="sipStepUp" width={90}/>
          <Tooltip />
          <Line type="monotone" dataKey="investment" stroke="green" dot={false} strokeWidth ={2}/>
          <Line type="monotone" dataKey="sipStepUp" stroke="red" dot={false} strokeWidth ={2}/>
        </LineChart>
      </ResponsiveContainer>

      </div>
    </>
  );
}

export default Graph;
