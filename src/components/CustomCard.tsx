import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  border: none;
  z-index: 10;
  position: relative;
  height: 12rem;
  border-radius: 5px;
  @media only screen and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  padding: 1rem;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2.25rem;
  left: 1.25rem;

  @media only screen and (max-width: 992px) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

interface Props {
  title: string;
  text: string;
  icon: any;
}

function CustomCard(props: Props) {
  const StyledIcon = styled.img.attrs({
    src: props.icon,
    alt: 'icon',
  })`
    width: 2rem;
    height: 2rem;
  `;

  return (
    <StyledCard>
      <StyledDiv className="bg-dark">
        <StyledIcon />
      </StyledDiv>
      <CardBody className="mt-3 ">
        <CardTitle className="font-weight-bold">{props.title}</CardTitle>
        <CardText className="text-muted">{props.text}</CardText>
      </CardBody>
    </StyledCard>
  );
}

export { CustomCard };
