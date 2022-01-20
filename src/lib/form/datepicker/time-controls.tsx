import React from "react";
import styled from "styled-components";
import LeftArrow from "../../../assets/svgs/arrows/simple-left.svg";

const TimeControl = styled.div`
  flex-grow: 1;
  border-top: 1px solid ${({ theme }) => theme.stroke};
  border-bottom: 1px solid ${({ theme }) => theme.stroke};

  display: flex;
  flex-direction: column;
`;

const TimeDisplay = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.mediumBlue};
  padding: 0px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  small {
    font-weight: 600;
    color: ${({ theme }) => theme.primaryBlue};
    user-select: none;
  }
`;

const TimeButtons = styled(TimeDisplay)`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.whiteBackground};
`;

const StyledArrow = styled(LeftArrow)`
  width: 16px;
  height: 16px;
  transition: fill ease ${({ theme }) => theme.transitionSpeed};
`;

const UpArrow = styled(StyledArrow)`
  transform: rotate(90deg);
`;

const DownArrow = styled(StyledArrow)`
  transform: rotate(-90deg);
`;

const UnstyledButton = styled.button`
  background: none;
  padding: 0;

  svg {
    fill: ${({ theme }) => theme.primaryBlue};
  }
  :hover {
    svg {
      fill: ${({ theme }) => theme.secondaryBlue};
    }
  }
  :disabled {
    svg {
      fill: ${({ theme }) => theme.stroke};
    }
  }
`;

export interface ITimeControls {
  date: Date;
  hours: number;
  minutes: number;
  setHours: (hours: number) => void;
  setMinutes: (minutes: number) => void;
}

const TimeControls: React.FC<ITimeControls> = ({
  date,
  hours,
  minutes,
  setHours,
  setMinutes,
}) => (
  <TimeControl>
    <TimeButtons>
      <UnstyledButton
        onClick={() => {
          const newHours = hours + 1;
          setHours(newHours);
          date.setHours(newHours, minutes);
        }}
        disabled={hours === 23}
      >
        <UpArrow />
      </UnstyledButton>
      <UnstyledButton
        onClick={() => {
          const newMinutes = minutes + 1;
          setMinutes(newMinutes);
          date.setHours(hours, newMinutes);
        }}
        disabled={minutes === 59}
      >
        <UpArrow />
      </UnstyledButton>
    </TimeButtons>
    <TimeDisplay>
      <small>
        {hours.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </small>
      <small>:</small>
      <small>
        {minutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </small>
    </TimeDisplay>
    <TimeButtons>
      <UnstyledButton
        onClick={() => {
          const newHours = hours - 1;
          setHours(newHours);
          date.setHours(newHours, minutes);
        }}
        disabled={hours === 0}
      >
        <DownArrow />
      </UnstyledButton>
      <UnstyledButton
        onClick={() => {
          const newMinutes = minutes - 1;
          setMinutes(newMinutes);
          date.setHours(hours, newMinutes);
        }}
        disabled={minutes === 0}
      >
        <DownArrow />
      </UnstyledButton>
    </TimeButtons>
  </TimeControl>
);

export default TimeControls;