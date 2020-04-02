import React from "react";

import { Container, SectionBlock } from "../styles";

import Form from "../form";
import List from "../list";

const Dashboard = () => {
  return (
    <Container>
      <SectionBlock>
        <Form/>
      </SectionBlock>

      <List />
    </Container>
  );
};

export default Dashboard;
