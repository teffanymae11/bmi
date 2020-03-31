import React from 'react';
import { AppState, PersonalData } from '../../types';
import { useSelector } from 'react-redux';

const BMIDisplay = () => {
  const personalData:PersonalData[] = useSelector((state:AppState)=> state.personalVars)
  const bmi = Number((personalData.weight / ((perosnalData.height * 0.01) * (perosnalData.height * 0.01))).toFixed(2))
  return (
    <>
      <h1>Body Mass Index</h1>
      {isNaN(bmi) ? null : <h2>{bmi}</h2>}
    </>
  )
}

export default React.memo(BMIDisplay);