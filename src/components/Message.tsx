import React from 'react';
import { Container, Button } from 'reactstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding: 1.1rem 3rem;
  margin-top: -3rem;
  margin-bottom: 3.8rem;
  @media only screen and (max-width: 576px) {
    max-width: 80%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    p {
      margin-right: 0 !important;
      padding-bottom: 0.5rem;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #eff1f7;
        position: absolute;
        top: 35%;
        left: 0;
      }
    }

    a {
      padding: 0.5rem 0;
    }

    button {
      width: 100%;
    }
  }
`;

function Message() {
  return (
    <StyledContainer className="bg-white rounded position-relative">
      <StyledDiv>
        <p className="mr-auto mb-0">https://fjkfjsafak.com</p>
        <a href="#" className="mr-3">
          htttps://gsdgl.com
        </a>
        <Button color="primary" className="text-white font-weight-bold px-3">
          Copy
        </Button>
      </StyledDiv>
    </StyledContainer>
  );
}

export { Message };
