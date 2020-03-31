import React, { useState, useCallback } from "react";
import { PersonalData } from "./types";

import { Container, SectionBlock } from "../styles";

import Form from "../form";
import BMIDisplay from "../bmi_display";
import List from "../list";
import { useDispatch } from "react-redux";
import { addRecord } from "../../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState<PersonalData[]>([]);
  const [personalData, setPersonalData] = useState<PersonalData>({
    name: "",
    height: "",
    weight: "",
    gender: "",
    age: ""
  });

  const onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPersonalData({
        ...personalData,
        [event.target.name]: event.target.value
      });
    },
    [personalData]
  );

  const onReset: () => void = () => {
    setPersonalData({ name: "", height: "", weight: "", gender: "", age: "" });
  };

  const onSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => void = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const newPersonalData = {
        name: personalData.name,
        height: personalData.height,
        weight: personalData.weight,
        gender: personalData.gender,
        age: personalData.age
      };

      // setData([...data, newPersonalData]);
      dispatch(addRecord(newPersonalData));

      setPersonalData({
        ...personalData,
        name: "",
        height: "",
        weight: "",
        gender: "",
        age: ""
      });
    },
    // [data, personalData]
    [dispatch, personalData]
  );

  const onDisplay = (val: PersonalData) => {
    setPersonalData({
      ...personalData,
      name: val.name,
      height: val.height,
      weight: val.weight,
      gender: val.gender,
      age: val.age
    });
  };

  return (
    <Container>
      <SectionBlock>
        <Form
          personalData={personalData}
          onSubmit={onSubmit}
          onChange={onChange}
          onReset={onReset}
        />
        <BMIDisplay
          weight={Number(personalData.weight)}
          height={Number(personalData.height)}
        />
      </SectionBlock>

      <List onDisplay={onDisplay} />
    </Container>
  );
};

export default Dashboard;
