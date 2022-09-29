import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import Menu from "../molecules/Menu";
import Image from "../atoms/Image";

import palette from "../../styles/palette";
import { MENU_LIST } from "../../constants/menu";
import logo from "../../assets/logo.png";

function Header({ ...props }) {
  return (
    <HeaderStyled {...props}>
      <Link to="/">
        <Image height="40px" src={logo} alt="logo.png" />
      </Link>
      <Menu menuList={MENU_LIST} padding="0 0 0 40px" fontColor="green" />
    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  ${({
    flexDirection = "row",
    justifyContent = "space-between",
    alignItems = "center",
    width = "100%",
    height = "100%",
    padding = null,
    backgroundColor = "transparent",
    borderRadius = "8px",
    hasBorder = false,
    borderColor = "black",
    shadowColor = "lightgray",
    fontColor = "inherit",
    fontSize = "1rem",
  }) => css`
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    width: ${width};
    height: ${height};
    padding: ${padding};
    background-color: ${backgroundColor === "transparent"
      ? "transparent"
      : palette[backgroundColor]};
    border-radius: ${borderRadius};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    -moz-box-shadow: 0px 0px 10px 5px ${palette[shadowColor]};
    -webkit-box-shadow: 0px 0px 10px 5px ${palette[shadowColor]};
    box-shadow: 0px 0px 10px 5px ${palette[shadowColor]};
    color: ${fontColor === "inherit" ? "inherit" : palette[fontColor]};
    font-size: ${fontSize};
  `}
`;
