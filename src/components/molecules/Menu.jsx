import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Text from "../atoms/Text";

import palette from "../../styles/palette";

function Menu({ menuList, padding, ...props }) {
  return (
    <MenuStyled {...props}>
      <MenuList>
        {menuList.map(({ name, url }) => (
          <MenuItem key={name} padding={padding}>
            <Link to={`${url}`}>
              <Text className="medium" value={name} textAlign="center" />
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.nav`
  font-weight: bold;
  ${({
    width = "auto",
    padding = null,
    backgroundColor = "transparent",
    borderRadius = "8px",
    hasBorder = false,
    borderColor = "black",
    fontColor = "inherit",
    fontSize = "1rem",
  }) => css`
    width: ${width};
    padding: ${padding};
    background-color: ${palette[backgroundColor]};
    border-radius: ${borderRadius};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    color: ${fontColor === "inherit" ? "inherit" : palette[fontColor]};
    font-size: ${fontSize};
  `}
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  padding: ${({ padding }) => padding};
`;

Menu.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  padding: PropTypes.string,
};
