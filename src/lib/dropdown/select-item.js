import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Dot from "../dot";

const ListItem = styled.div`
  background: ${(props) =>
    props.selected ? props.theme.mediumBlue : props.theme.lightBackground};
  border-left: 3px solid
    ${(props) =>
      props.selected ? props.theme.primaryBlue : props.theme.lightBackground};
  padding: 11.5px 13px 11.5px 16px;
  display: flex;
  align-items: center;

  ${(props) => {
    if (!props.title)
      return `
        :hover {
          background: ${props.theme.mediumBlue};
          border-left: 3px solid
            ${
              props.selected ? props.theme.primaryBlue : props.theme.mediumBlue
            };}`;
  }}

  p {
    font-size: 16px;
    user-select: none;
  }

  svg {
    max-height: 16px;
    max-width: 16px;
    min-height: 12px;
    min-width: 12px;
  }
`;

const StyledDot = styled(Dot)`
  margin-right: 8px;
`;

const SelectItem = ({ text, icon, dot, selected, title, onClick }) => (
  <ListItem selected={selected} title={title} onClick={onClick}>
    {icon}
    {dot && <StyledDot color={dot} />}
    <p>{text}</p>
  </ListItem>
);

SelectItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  dot: PropTypes.string,
  selected: PropTypes.bool,
  title: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SelectItem;