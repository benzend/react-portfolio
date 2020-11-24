import { Box, Button, Typography } from "@material-ui/core";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledSection = styled.div`
  position: relative;
  top: -160px;
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

export default function HomeAboutSection() {
  return (
    <StyledSection>
      <Box padding="10px 0 30px">
        <Typography variant="h5" component="h3">
          About Me
        </Typography>
      </Box>
      <Box margin="0 3rem">
        <Typography variant="p">
          As a passionate developer, my goals are to keep progressing in all
          areas of web development.
        </Typography>
        <br />
        <br />
        <Typography variant="p">
          I'm also a huge nerd when it comes to foreign languages and I've been
          weirdly obsessive about building things and thinking about what to
          build next.
        </Typography>

        <br />

        <Button style={{ marginTop: "30px" }}>Read More</Button>
      </Box>
    </StyledSection>
  );
}
