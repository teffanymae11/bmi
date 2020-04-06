import {PersonalData} from '../dashboard/types'
 
export type FormVars ={
    personalData : PersonalData,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void ,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    onReset: () => void,
}