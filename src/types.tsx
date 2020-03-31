export type LoggedVars = {
    state: boolean
}

export type PersonalData = {
    name: string,
    height: number | '',
    weight: number | '',
    gender: string,
    age: number | ''
}

export type AppState = {
    loggedReducer: LoggedVars[]
    personalVars: PersonalData[]
}

