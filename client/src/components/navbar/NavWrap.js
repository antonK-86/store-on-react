import React from "react"
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  heigth: 8rem;
  background-color: black;
`;

const NavWrap = ({children})=>{
  return (
    <NavWrapper>
     {children}
    </NavWrapper>
  );
}

export default NavWrap;