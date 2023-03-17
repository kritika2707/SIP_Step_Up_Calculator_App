const serviceData = async ({MonthlyInvestment,InvestmentPeriod,RateOfReturn,YearlyIncrement})=>{ 
  try {
    
  let monthlyInvestment = Number(MonthlyInvestment);
  let investmentPeriod = Number(InvestmentPeriod);
  let rateOfReturn = Number(RateOfReturn);
  let yearlyIncrement = Number(YearlyIncrement);
      let PeriodInMonth = investmentPeriod*12;
      // console.log(typeof InvestmentPeriod);
      rateOfReturn = (rateOfReturn)/1200;

      let incrementedAmount=0, TotalSIPWithStepUp=0, CummulationAmount=0 ,MonthlyInvest=0;
      const graph = [
        {
         years: 0,
         sipStepUp: 0,
         investment: 0
        }
      ];
      for(let i=1; i<=PeriodInMonth; i++)
      {        
      if(i!==1 && i%12==1)
      {
      incrementedAmount=(monthlyInvestment*(yearlyIncrement/100));
      monthlyInvestment += incrementedAmount;
      }
      
      MonthlyInvest += monthlyInvestment;
      CummulationAmount =monthlyInvestment*(Math.pow((1+rateOfReturn),(PeriodInMonth-i+1)));  
      TotalSIPWithStepUp += CummulationAmount;       
      if(i%12==0){
        const obj = {
         years: i/12,
         sipStepUp: Math.round(TotalSIPWithStepUp).toFixed(0),
         investment: Math.round(MonthlyInvest).toFixed(0)
        }
        graph.push(obj)
        }      
      }
      const graphResult={
        graph:graph,
        TotalSIPWithStepUp:TotalSIPWithStepUp.toFixed(0),
        MonthlyInvest:MonthlyInvest.toFixed(0)
      }
      return graphResult;
      
  } catch (error) {
    res.send(error);
    
  }
}

module.exports = serviceData;