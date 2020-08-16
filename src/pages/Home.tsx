import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CustomButton } from '../components/button/CustomButton';
import { UrlShortenForm } from '../components/UrlShortenForm';
import { Message } from '../components/Message';
import { CustomCard } from '../components/CustomCard';

import icon1 from '../images/icon-brand-recognition.svg';
import icon2 from '../images/icon-detailed-records.svg';
import icon3 from '../images/icon-fully-customizable.svg';
import { Boost } from '../components/Boost';
import { Footer } from '../components/Footer';
import {
  StyledHeading,
  StyledCol,
  StyledSection,
  StyledContainer,
  FormContainer,
  Image,
  CardDiv,
} from './Home.styles';

function Home() {
  return (
    <>
      <StyledContainer>
        <Row>
          <Col lg className="order-1 order-lg-0">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <StyledHeading className="display-4 font-weight-bold text-center text-lg-left">
                More than just shorter links
              </StyledHeading>
              <p className="text-muted w-75 text-center text-lg-left">
                Build your brands recognition and get detailed insights on how
                your links are performing.
              </p>

              <CustomButton color="primary">Get Started</CustomButton>
            </div>
          </Col>
          <Col lg className="order-0 order-lg-1">
            <Image />
          </Col>
        </Row>
      </StyledContainer>
      <main className="bg-color-gray-violet">
        <FormContainer>
          <UrlShortenForm />
        </FormContainer>
        <Message />
        <Message />
        <Message />

        <StyledSection>
          <div className="text-center py-3 mb-5">
            <h3 className="display-5 font-weight-bold">Advanced Statistics</h3>
            <p className="text-muted w-lg-50  px-5 mx-auto">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>
          <Container>
            <Row>
              <StyledCol lg>
                <CardDiv>
                  <div className="align-self-start">
                    <CustomCard
                      icon={icon1}
                      title="Brand recognition"
                      text="Boost your brand recognition with each click. Generic links don’t 
                      mean a thing. Branded links help instil confidence in your content."
                    />
                  </div>
                </CardDiv>
              </StyledCol>
              <StyledCol lg>
                <CardDiv>
                  <div className="align-self-center">
                    <CustomCard
                      icon={icon2}
                      title="Detailed Records"
                      text="Gain insights into who is clicking your links. Knowing when and where 
                      people engage with your content helps inform better decisions."
                    />
                  </div>
                </CardDiv>
              </StyledCol>
              <Col lg>
                <CardDiv>
                  <div className="align-self-end">
                    <CustomCard
                      icon={icon3}
                      title="Fully Customizable"
                      text="Improve brand awareness and content discoverability through customizable 
                      links, supercharging audience engagement."
                    />
                  </div>
                </CardDiv>
              </Col>
            </Row>
          </Container>

          <Boost />
        </StyledSection>
      </main>
      <Footer />
    </>
  );
}

export { Home };
