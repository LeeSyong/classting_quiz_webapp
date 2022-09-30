import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import palette from "../../styles/palette";

function Table({ tableHead, tableData, ...props }) {
  return (
    <TableStyled {...props}>
      <thead>
        <tr>
          {tableHead.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableData.map((data, index) => (
            <th key={index}>{data}</th>
          ))}
        </tr>
      </tbody>
    </TableStyled>
  );
}

export default Table;

const TableStyled = styled.table`
  ${({
    width = "100%",
    backgroundColor = "transparent",
    borderRadius = "20px",
    borderStyle = "hidden",
    boxShadow = `0 0 0 2px ${palette.black}`,
  }) => css`
    width: ${width};
    backgroundcolor: ${backgroundColor};
    border-radius: ${borderRadius};
    border-style: ${borderStyle};
    box-shadow: ${boxShadow};
  `}
  th,
  td {
    padding: 10px;
    border: 2px solid ${palette.green};
    color: ${({ fontColor }) => fontColor || "inherit"};
    text-align: ${({ textAlign }) => textAlign || "center"};
    font-size: ${({ fontSize }) => fontSize || "inherit"};
  }
`;

Table.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
