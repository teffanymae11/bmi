import * as actions from '../../strings'
import { PersonalData } from '../../types'

export const signIn = () => ({
    type: actions.SIGN_IN
})

export const onReset = () => ({
    type: actions.ON_RESET
})

export const onChange = (event: React.ChangeEvent<HTMLInputElement>) => ({
    type: actions.ON_CHANGE,
    payload: {
        targetName: event.target.name,
        targetValue: event.target.value
    }
})

export const onSubmit = (event: React.FormEvent<HTMLFormElement>) => ({
    type: actions.ON_SUBMIT,
    payload: {
        eventPrevent: event.preventDefault()
    }
})

export const onDisplay = (val: PersonalData) => ({
    type: actions.ON_DISPLAY,
    payload: {
        name: val.name,
        height: val.height,
        weight: val.weight,
        gender: val.gender,
        age: val.age
    }
})