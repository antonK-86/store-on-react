import React from "react"
import styled from "styled-components";

const StyledContainer = styled.div`
max-width: 1280px;
height: 3rem;
margin: 0 auto;
padding: 0.5rem 1rem;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = ({children})=>{
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Container;