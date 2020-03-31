import React from 'react';
import { FormVars } from './types'


const Form = ({ personalData, onChange, onReset, onSubmit }: FormVars) => {

  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <input type="text" name="name" placeholder="Name" value={personalData.name} onChange={onChange} />
      <input type="number" name="height" placeholder="Height" value={personalData.height} onChange={onChange} />
      <input type="number" name="weight" placeholder="Weight" value={personalData.weight} onChange={onChange} />
      <input type="radio" name="gender" value="m" checked={personalData.gender === "m"} onChange={onChange} /> Male
        <input type="radio" name="gender" value="f" checked={personalData.gender === "f"} onChange={onChange} /> Female
        <input type="number" name="age" placeholder="Age" value={personalData.age} onChange={onChange} />
      <div>
        <button type="reset" >Reset</button>
        <button type="submit">Add Record</button>
      </div>
    </form>

  )
}

export default Form