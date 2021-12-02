import React from "react";

import styled from "styled-components";

const CardContainer = ({ children, login }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
`;

export default CardContainer;
