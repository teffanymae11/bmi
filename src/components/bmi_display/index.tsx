import React from 'react';
import { BMIVars } from './types';

const BMIDisplay = ({ weight, height }: BMIVars) => {
  const bmi: number | undefined = Number((weight / ((height * 0.01) * (height * 0.01))).toFixed(2))
  return (
    <>
      <h1>Body Mass Index</h1>
      {isNaN(bmi) ? null : <h2>{bmi}</h2>}
    </>
  )
}

export default React.memo(BMIDisplay);