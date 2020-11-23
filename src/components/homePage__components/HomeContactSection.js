import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";

import styled from "styled-components";

const StyledSection = styled.div`
  clip-path: polygon(89% 15%, 100% 0, 100% 100%, 0 100%, 0 15%);
  padding: 120px 0 70px 0;
  background: rgb(140, 192, 255);
  background: linear-gradient(
    63deg,
    rgba(140, 192, 255, 1) 0%,
    rgba(190, 234, 255, 1) 100%
  );

    text-align: center;
  }

`;

export default function HomeContactSection() {
  return (
    <StyledSection>
      <Typography variant="h5" component="h3">
        Contact Me
      </Typography>
      <Box>
        <form>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
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
              type="tel"
              aria-describedby="An input for your phone number"
            />
            <FormHelperText id="my-helper-text">
              Your phone number isn't required
            </FormHelperText>
          </FormControl>
          <br />
          <Box marginTop="20px">
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
    </StyledSection>
  );
}
