import React from "react";
import { Link } from "react-router-dom";

import FoodimaIcon from "../../static/foodima-icon.svg";
import {
  Container,
  Nav,
  NavWrapper,
  NavHeading,
  NavButtonWrapper,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Nav className="container">
        <NavWrapper>
          <NavHeading>
            <Link to="/" className="logo">
              <img src={FoodimaIcon} alt="foodima" />
              Foodima
            </Link>
          </NavHeading>
        </NavWrapper>
        <NavButtonWrapper>
          <button type="button" className="login">
            Log in
          </button>
          <button type="button" className="singup">
            Sign Up
          </button>
        </NavButtonWrapper>
      </Nav>
    </Container>
  );
};

export default Header;
