const serviceData = async (data)=>{
  console.log(data);
    const graph = [
        {
         years: 0,
         sipStepUp: 0,
         investment: 0
        }
      ];
      let PeriodInMonth = data.InvestmentPeriod*12;
      data.RateOfReturn = (data.RateOfReturn)/1200;
      let incrementedAmount = 0, TotalSIPWithStepUp =0 , CummulationAmount=0,MonthlyInvest=0;
      for(let i=1; i<=PeriodInMonth; i++)
      {        
      if(i!==1 && i%12==1)
      {
      incrementedAmount=Math.floor(data.MonthlyInvestment*(data.YearlyIncrement/100));
      data.MonthlyInvestment=data.MonthlyInvestment + incrementedAmount
      }
      MonthlyInvest += data.MonthlyInvestment;
      CummulationAmount =data.MonthlyInvestment*(Math.pow((1+data.RateOfReturn),(PeriodInMonth-i+1)));  
      TotalSIPWithStepUp += CummulationAmount;       
      if(i%12==0){
        const obj = {
         years: i/12,
         sipStepUp: Number(Math.round(TotalSIPWithStepUp).toFixed(0)),
         investment: Number(Math.round(MonthlyInvest).toFixed(0))
        }
        graph.push(obj)
        }      
      }
      TotalSIPWithStepUp = Number(TotalSIPWithStepUp.toFixed(0));
      graphResult={
        graph,
        TotalSIPWithStepUp,
        MonthlyInvest
      }
      console.log(graphResult);
      return graphResult;
}

module.exports = serviceData;