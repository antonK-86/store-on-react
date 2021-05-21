import React from "react";
import styled from "styled-components";

const StyledWrapVh = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapVh = ({ children }) => {
  return <StyledWrapVh>{children}</StyledWrapVh>;
};

export default WrapVh;
