import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

interface Props {
  color: string;
  children: React.ReactNode;
}

function CustomButton(props: Props): JSX.Element {
  const StyledButton = styled(Button)`
    border-radius: 100px;
    color: ${(props) =>
      props.color !== 'faded' ? '#fff' : 'hsl(257, 7%, 63%)'};
    font-size: 1rem;
    font-family: inherit;
    font-weight: 700;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  `;

  return <StyledButton color={props.color}>{props.children}</StyledButton>;
}

export { CustomButton };
