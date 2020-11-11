import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import {
  HeaderContainer,
  LinkContainer,
  TitleContainer

} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
        <TitleContainer>
          <img src={logo} alt={"Pokemon Go"}/>
        </TitleContainer>
        <LinkContainer>
            <Link to={"/"}>Go to HOME</Link>
        </LinkContainer>
    </HeaderContainer>
    
  )
};