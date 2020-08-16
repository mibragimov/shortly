import styled from 'styled-components';
import { Container, Col } from 'reactstrap';

import illustration from '../images/illustration-working.svg';
import bgShortenDesktop from '../images/bg-shorten-desktop.svg';
import bgShortenMobile from '../images/bg-shorten-mobile.svg';

export const StyledContainer = styled(Container)`
  padding-top: 10rem;
  padding-bottom: 18rem;

  @media only screen and (max-width: 992px) {
    padding-top: 2rem;
    padding-bottom: 8rem;
  }
`;

export const Image = styled.img.attrs({
  src: illustration,
  alt: 'bg',
})`
  width: 52rem;
  position: absolute;
  top: -8.5rem;
  right: -18.7rem;

  @media only screen and (max-width: 1300px) {
    right: -15rem;
  }
  @media only screen and (max-width: 1200px) {
    right: -14rem;
  }
  @media only screen and (max-width: 1100px) {
    right: -12rem;
    width: 48rem;
  }
  @media only screen and (max-width: 992px) {
    position: relative;
    top: 0;
    right: -8rem;

    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 800px) {
    right: -5rem;
    width: 40.5rem;
  }
  @media only screen and (max-width: 600px) {
    right: -3rem;
    width: 35.5rem;
  }
  @media only screen and (max-width: 500px) {
    right: -1rem;
    width: 35.5rem;
  }
`;

export const FormContainer = styled(Container)`
  padding: 3rem;
  border-radius: 5px;
  background: url(${bgShortenDesktop}) no-repeat top, hsl(255, 11%, 22%);
  background-size: cover;
  transform: translateY(-4rem);

  @media only screen and (max-width: 768px) {
    background-image: url(${bgShortenMobile});
    background-position: bottom;
    transform: translateY(-6rem);
  }

  @media only screen and (max-width: 576px) {
    max-width: 80%;
  }
`;

export const StyledSection = styled.section`
  padding-top: 6rem;

  @media only screen and (max-width: 992px) {
    padding-top: 4rem;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  height: 15rem;

  @media only screen and (max-width: 576px) {
    max-width: 80%;
    margin: 0 auto;
  }
`;

export const StyledCol = styled(Col)`
  &::after {
    content: '';
    width: 2.5rem;
    height: 8px;
    background-color: hsl(180, 66%, 49%);
    display: inline-block;
    position: absolute;
    top: 5rem;
    right: 0;
    z-index: 1;
    transform: translateX(1rem);

    @media only screen and (max-width: 992px) {
      top: 13.5rem;

      left: 50%;
      width: 8px;
      height: 5.5rem;
      transform: translate(-50%, -50%);
    }
  }
`;

export const StyledHeading = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;
