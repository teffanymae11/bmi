import React, { useState, useMemo } from 'react';
import { PersonalData } from '../dashboard/types'
import { FilterVars, ListVars } from './types'

import { SectionBlock, ButtonGender, ButtonAge, Ul, Li } from '../styles'
import { useSelector } from 'react-redux';

const List:React.FC<ListVars> = ({onDisplay}) => {
  const data = useSelector((state: any) => state.data)
  const [filter, setFilter] = useState<FilterVars>({ male: true, minor: true })
  const [order, setOrder] = useState<boolean>(false)

  const orderAssending = () => {
    setOrder(false)
  }

  const orderDescending = () => {
    setOrder(true)
  }

  const filterMale = () => setFilter({
    ...filter,
    male: true,
  })

  const filterFemale = () => setFilter({
    ...filter,
    male: false,
  })

  const filterMinor = () => setFilter({
    ...filter,
    minor: true,
  })

  const filterAdult = () => setFilter({
    ...filter,
    minor: false,
  })

  const list = data.filter((val: PersonalData) => {
    if (filter.minor && filter.male) return val.age < 18 && val.gender === "m"
    if (filter.minor && !filter.male) return val.age < 18 && val.gender === "f"
    if (!filter.minor && filter.male) return val.age >= 18 && val.gender === "m"
    return val.age >= 18 && val.gender === "f"
  }).sort((a: PersonalData, b: PersonalData) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    if (order) return textB.localeCompare(textA);
    return textA.localeCompare(textB);
  });

  const filterShow = useMemo(() => {

    return (
      <Ul>
        {
          list.map((val: PersonalData) => {
            return (
              <Li key={val.name} onClick={() => { onDisplay(val) }}>Name: {val.name} -- Age: {val.age}</Li>
            )
          })
        }
      </Ul>
    )
  }, [list, onDisplay])
  
  return (
    <SectionBlock>
      <div>
        <h1>Filter By:</h1>
        <div>
          <button onClick={orderAssending}>Assending</button>
          <button onClick={orderDescending}>Descending</button>
        </div>
        <ButtonGender>
          <button onClick={filterMale}>M</button>
          <button onClick={filterFemale}>F</button>
        </ButtonGender>
        <ButtonAge>
          <button onClick={filterMinor}>Minor</button>
          <button onClick={filterAdult}>Adult</button>
        </ButtonAge>
      </div>
      {
        <>
          {filterShow}
        </>
      }
    </SectionBlock>
  )
}

export default List;