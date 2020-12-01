import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";

import styled from "styled-components";

const StyledSection = styled.div`
  background: rgb(112, 168, 255);
  background: linear-gradient(
    34deg,
    rgba(112, 168, 255, 1) 0%,
    rgba(129, 199, 255, 1) 100%
  );
  border-radius: 10px;
  padding: 6%;
  margin: 8% 0;
  textArea {
    margin-top: 6%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: none;
    border-radius: 5px;
    padding: 4px;
  }
  @media (min-width: 900px) {
    margin: 20px 10px 10px 10px;
    padding: 2%;
    min-width: 30%;
    h3 {
      margin-top: 10px;
    }
  }
`;

export default function HomeContactSection() {
  return (
    <StyledSection>
      <Box textAlign="center">
        <Typography variant="h5" component="h3">
          Contact Me
        </Typography>
      </Box>
      <Box textAlign="center">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              type="text"
              aria-describedby="An input for your name"
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              aria-describedby="An input for you email address"
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="tel">Phone Number</InputLabel>
            <Input
              id="tel"
              name="tel"
              type="tel"
              aria-describedby="An input for your phone number"
            />
            <FormHelperText id="my-helper-text">
              (Your phone number isn't required)
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <TextareaAutosize
              placeholder="What would you like to say?"
              id="message"
              name="message"
              rows="5"
              cols="28"
            ></TextareaAutosize>
          </FormControl>
          <Box marginTop="20px">
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </StyledSection>
  );
}
