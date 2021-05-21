import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import NavGroup from "./NavGroup";
import NavWrap from "./NavWrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <NavWrap>
      <Container>
        <NavGroup>
          <NavLink to={"/"} className="navbar-brand">
            ShopName
          </NavLink>
          <NavGroup>
            <NavLink to={"/shop"} className="nav-link" activeClassName="active">
              Shop
            </NavLink>
            <NavLink
              to={"/device"}
              className="nav-link"
              activeClassName="active"
            >
              Devices
            </NavLink>
          </NavGroup>
        </NavGroup>

        <NavGroup>
          <NavLink to={"/basket"} className="nav-link" activeClassName="active">
            Basket
          </NavLink>
          <NavLink to={"/login"} className="nav-link" activeClassName="active">
            Sign In
          </NavLink>
          <NavLink
            to={"/registration"}
            className="nav-link"
            activeClassName="active"
          >
            Sign Up
          </NavLink>
          <NavLink
            to={"/registration"}
            className="nav-link"
            activeClassName="active"
          >
            Sign Out
          </NavLink>
        </NavGroup>
      </Container>
    </NavWrap>
  );
};

export default NavBar;
