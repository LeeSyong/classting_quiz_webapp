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
    tableLayout = "fixed",
    width = "100%",
    margin = null,
    backgroundColor = "transparent",
    borderRadius = "20px",
    borderStyle = "hidden",
    boxShadow = `0 0 0 2px ${palette.black}`,
  }) => css`
    table-layout: ${tableLayout};
    width: ${width};
    margin: ${margin};
    backgroundcolor: ${backgroundColor};
    border-radius: ${borderRadius};
    border-style: ${borderStyle};
    box-shadow: ${boxShadow};
  `}
  th,
  td {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
    border: ${({ borderColor = palette.green }) => `2px solid ${borderColor}`};
    color: ${({ fontColor }) => fontColor || "inherit"};
    text-align: ${({ textAlign }) => textAlign || "center"};
    vertical-align: ${({ verticalAlign }) => verticalAlign || "middle"};
    font-size: ${({ fontSize }) => fontSize || "inherit"};
    white-space: nowrap;
  }
`;

Table.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  ).isRequired,
};
