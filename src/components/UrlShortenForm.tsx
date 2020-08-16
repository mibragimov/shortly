import React, { Dispatch, SetStateAction } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { INITIAL_STATE } from '../pages/Home';

const StyledFormGroup = styled(FormGroup)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 1rem !important;
    margin-right: 0 !important;
  }
`;

interface FormValues {
  longURL: string;
}

interface Props {
  setData: Dispatch<SetStateAction<INITIAL_STATE[]>>;
}

function UrlShortenForm(props: Props): JSX.Element {
  const { handleSubmit, errors, control } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: data.longURL,
          group_guid: 'Bk8g7m3DAEB',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BITLY_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      props.setData((prevState) => [
        ...prevState,
        { longUrl: data.longURL, shortUrl: res.data.link },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const StyledInput = styled(Input)`
    &::placeholder {
      font-family: inherit;
      font-weight: 500;
      color: ${errors.longURL
        ? 'hsla(0, 87%, 67%, 0.609)'
        : 'hsl(257, 7%, 63%)'};
    }
  `;

  return (
    <>
      <Form
        className="d-flex flex-column flex-md-row align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <StyledFormGroup className="flex-grow-1 mr-3 mb-0">
          <Controller
            as={StyledInput}
            type="text"
            defaultValue=""
            placeholder="Shorten a link here..."
            name="longURL"
            control={control}
            className={errors.longURL ? 'is-invalid' : ''}
            rules={{
              required: 'Please add a link',
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: 'Please provide a valid link',
              },
            }}
          />
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
      {errors.longURL ? (
        <p className="text-danger font-italic m-0">{errors.longURL.message}</p>
      ) : null}
    </>
  );
}

export { UrlShortenForm };
