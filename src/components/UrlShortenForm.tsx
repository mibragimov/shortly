import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const StyledFormGroup = styled(FormGroup)`
  @media only screen and (max-width: 578px) {
    margin-bottom: 1rem !important;
    margin-right: 0 !important;
    width: 100%;
    align-items: flex-end;
  }
`;

function UrlShortenForm() {
  return (
    <Form className="d-flex flex-column flex-md-row align-items-center">
      <StyledFormGroup className="flex-grow-1 mr-3 mb-0">
        <Input type="text" placeholder="Shorten a link here" />
      </StyledFormGroup>
      <StyledFormGroup className="mb-0">
        <Button
          type="submit"
          color="primary"
          className="text-white px-3 font-weight-bold w-100"
        >
          Shorten it!
        </Button>
      </StyledFormGroup>
    </Form>
  );
}

export { UrlShortenForm };
