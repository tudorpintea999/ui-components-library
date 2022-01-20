import React, { ReactNode } from "react";
import styled from "styled-components";
import Card from "../container/card";

const StyledCard = styled(Card)`
  height: 80px;
  width: 288px;
  padding: 16px;
  display: flex;
`;

const Text = styled.div`
  height: 100%;
  width: auto;
  margin-left: 16px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const IconCard = styled(Card)`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-height: 32px;
    max-width: 32px;
  }
`;

export interface DisplayIconProps {
  text: string;
  icon?: ReactNode;
  label?: string;
}

const DisplayIcon: React.FC<DisplayIconProps> = ({
  text,
  icon,
  label,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <IconCard>{icon}</IconCard>
      <Text>
        <h1>{text}</h1>
        <small>{label}</small>
      </Text>
    </StyledCard>
  );
};

export default DisplayIcon;