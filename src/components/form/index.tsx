import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmit, onChange, onReset} from '../../redux/actions'
import { AppState, PersonalData } from '../../types';


const Form = () => {
 const dispatch = useDispatch()
 const personalData = useSelector((state:AppState)=> state.personalVars)
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => dispatch(onSubmit(event))} onReset={() => dispatch(onReset())}>
  
      <input type="text" name="name" placeholder="Name" value={personalData.name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(event))} />
      <input type="number" name="height" placeholder="Height" value={personalData.height} onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(event))} />
      <input type="number" name="weight" placeholder="Weight" value={personalData.weight} onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(event))} />
      <input type="radio" name="gender" value="m" checked={personalData.gender === "m"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(event))} /> Male
        <input type="radio" name="gender" value="f" checked={personalData.gender === "f"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(event))} /> Female
        <input type="number" name="age" placeholder="Age" value={personalData.age} onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(event))} />
      <div>
        <button type="reset" >Reset</button>
        <button type="submit">Add Record</button>
      </div>
    </form>

  )
}

export default Form