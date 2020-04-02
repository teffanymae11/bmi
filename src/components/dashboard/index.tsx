import React from "react";

import { Container, SectionBlock } from "../styles";

import Form from "../form";
import List from "../list";
import { PersonalData } from "./types";
import { useDispatch } from "react-redux";
import { displayData } from "../../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch()
  const onDisplay = (val: PersonalData) => {
    dispatch(displayData(val))
  };
  return (
    <Container>
      <SectionBlock>
        <Form  />
      </SectionBlock>

      <List onDisplay={onDisplay}/>
    </Container>
  );
};

export default Dashboard;
