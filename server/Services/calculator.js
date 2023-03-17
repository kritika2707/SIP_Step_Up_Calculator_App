const serviceData = async ({MonthlyInvestment,InvestmentPeriod,RateOfReturn,YearlyIncrement})=>{
  console.log("InvestmentPEriod:",InvestmentPeriod);  
  console.log("Monthly Investment:",MonthlyInvestment);  
  console.log("RateofReturn:",RateOfReturn);  
  console.log("Yearly Increment:",YearlyIncrement);  

      let PeriodInMonth = InvestmentPeriod*12;
      RateOfReturn = (RateOfReturn)/1200;

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
      incrementedAmount=Number(MonthlyInvestment*(YearlyIncrement/100));
      MonthlyInvestment += incrementedAmount;
      console.log("Incremented Amount ",incrementedAmount);
      }
      
      MonthlyInvest += MonthlyInvestment;
      // console.log("Monthly Invest:",MonthlyInvest);
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