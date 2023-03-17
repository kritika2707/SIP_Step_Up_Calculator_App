const serviceData = async ({InvestmentPeriod,RateOfReturn,MonthlyInvestment,YearlyIncrement})=>{
      let PeriodInMonth = InvestmentPeriod*12;
      RateOfReturn = (RateOfReturn)/1200;

      let incrementedAmount, TotalSIPWithStepUp , CummulationAmount ,MonthlyInvest;
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
      incrementedAmount=MonthlyInvestment*(YearlyIncrement/100);
      MonthlyInvestment += incrementedAmount
      console.log("Increment:",incrementedAmount);
      }
      

      MonthlyInvest += MonthlyInvestment;
      CummulationAmount =MonthlyInvestment*(Math.pow((1+RateOfReturn),(PeriodInMonth-i+1)));  
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
      TotalSIPWithStepUp = parseInt(TotalSIPWithStepUp.toFixed(0));
      const graphResult={
        graph:graph,
        TotalSIPWithStepUp:TotalSIPWithStepUp,
        MonthlyInvest:MonthlyInvest
      }
      // console.log("GraphResult:",graphResult);
      return graphResult;
}

module.exports = serviceData;