import { Box, Button, Typography } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledSection = styled.div`
  background: rgb(112, 168, 255);
  background: linear-gradient(
    34deg,
    rgba(112, 168, 255, 1) 0%,
    rgba(129, 199, 255, 1) 100%
  );
  padding: 6%;
  margin: 8% 0;
`;

export default function HomeAboutSection() {
  return (
    <StyledSection>
      <Box textAlign="center" padding="10px 0 30px">
        <Typography variant="h5" component="h3">
          About
        </Typography>
      </Box>
      <Box textAlign="center" margin="0 3rem">
        <Typography variant="p">
          As a passionate developer, my goals are to keep progressing in all
          areas of web development. From UI to backend, my skills will keep
          moving forward by building and learning everything that I can.
        </Typography>
        <br />

        <Link to="about">
          <Button color="secondary" style={{ marginTop: "30px" }}>
            Read More
          </Button>
        </Link>
      </Box>
    </StyledSection>
  );
}
