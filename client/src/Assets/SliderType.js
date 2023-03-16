import React from 'react';
import SliderCalculator from './SliderCalculator';

function SliderType(props) {
  return (
    <div className='slidertype' >
      <SliderCalculator index={0} minimum={500} maximum={100000} steps ={500} value={props.MonthlyInvestment} setValue={props.changeMonthlyInvestment}/>
      <SliderCalculator index={1} minimum={1} maximum={30} steps= {1} value={props.InvestmentPeriod} setValue={props.changeInvestmentPeriod}/>
      <SliderCalculator index={2} minimum={1} maximum={30} steps= {.1} value={props.RateOfReturn} setValue={props.changeRateOfReturn}/>
      <SliderCalculator index={3} minimum={1} maximum={12} steps= {1} value={props.YearlyIncrement} setValue={props.changeYearlyIncrement}/>
    </div>
  )
}

export default SliderType;