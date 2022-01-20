import React, { ReactNode, useRef } from "react";
import styled from "styled-components";
import Plus from "../../assets/svgs/accordion/plus.svg";
import Minus from "../../assets/svgs/accordion/minus.svg";

const StyledDiv = styled.div`
  margin: 8px;
  button {
    width: 100%;
    background: ${({ theme }) => theme.primaryPurple};
    border-radius: 3px;
    padding: 11.5px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: fit-content;
      font-weight: 600;
      text-align: center;
      color: white;
    }

    svg {
      height: 16px;
      width: 16px;
    }
  }
`;

interface CollapsibleProps {
  expanded?: boolean;
  totalHeight: number;
}

const Collapsible = styled.div<CollapsibleProps>`
  height: ${(props) => (props.expanded ? props.totalHeight.toString() : "0")}px;
  overflow: hidden;
  transition: height ease ${({ theme }) => theme.transitionSpeed};
`;

const Body = styled.div`
  padding: 32px;
  small {
    color: ${({ theme }) => theme.primaryText};
  }
`;

interface AccordionItemProps {
  setExpanded: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  title: string;
  body: ReactNode;
  icon?: ReactNode;
  expanded?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const heightRef = useRef<number>(0);
  return (
    <StyledDiv>
      <button
        onClick={() => props.setExpanded(props.expanded ? -1 : props.index)}
      >
        {props.icon}
        <p> {props.title} </p>
        {props.expanded ? <Minus /> : <Plus />}
      </button>
      <Collapsible expanded={props.expanded} totalHeight={heightRef.current}>
        <Body ref={(ref) => (heightRef.current = ref?.clientHeight || 0)}>
          <small>{props.body}</small>
        </Body>
      </Collapsible>
    </StyledDiv>
  );
};

export default AccordionItem;