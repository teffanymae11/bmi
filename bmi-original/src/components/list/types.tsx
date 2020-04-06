import {PersonalData} from '../dashboard/types'

export type ListVars = {
    data: PersonalData[],
    onDisplay: (val:PersonalData) => void,
}

export type FilterVars = {
    male: boolean,
    minor: boolean
}