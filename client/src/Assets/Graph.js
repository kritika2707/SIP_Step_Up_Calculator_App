import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';


function Graph(props){
  function toIndianRupees(sum){
    return sum.toString().replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
  }

  return (
  <>
      <div className="graphi">
      <div className="textforgraph">
    <span >
      After{" "}
      <span className="AfterYearsOf"> {props.InvestmentPeriod} year's</span>{" "}
      you will have
    </span>
    <h2 >
      ₹ {toIndianRupees(Number(props.TotalSIPWithStepUp))}
    </h2>
    <p >
      That's
      <span className="currencyRupeeInPara">
        ₹ {toIndianRupees(Number(props.TotalSIPWithStepUp - props.MonthlyInvest))}
      </span>{" "}
      as potential capital gains on your investment of
      <span className="currencyRupeeInPara2">
        ₹ {toIndianRupees(Number(props.MonthlyInvest))}
      </span>
    </p>
    </div>
    <ResponsiveContainer className="graph-div" width="90%" aspect={1.6}>
        <LineChart
          width={550}
          height={550}
          min={0}
          max={5000000}
          data={props.graph}
          >
          <XAxis dataKey="years"/>
          <YAxis dataKey="sipStepUp" width={90}/>
          <Tooltip />
          <Line type="monotone" dataKey="investment" stroke="#2f50e8" dot={false} strokeWidth ={2}/>
          <Line type="monotone" dataKey="sipStepUp" stroke="#4822a2" dot={false} strokeWidth ={2}/>
        </LineChart>
      </ResponsiveContainer>

      </div>
    </>
  );
}

export default Graph;
