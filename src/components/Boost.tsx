import React from 'react';
import styled from 'styled-components';
import { CustomButton } from './button/CustomButton';

import boostDesktop from '../images/bg-boost-desktop.svg';
import boostMobile from '../images/bg-boost-mobile.svg';

const StyledDiv = styled.div`
  background-image: url(${boostDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  @media only screen and (max-width: 768px) {
    background-image: url(${boostMobile});
  }
`;

function Boost() {
  return (
    <StyledDiv className="bg-dark">
      <h3 className="display-4 text-white mb-3">Boost your links today</h3>
      <CustomButton color="primary">Get Started</CustomButton>
    </StyledDiv>
  );
}

export { Boost };
