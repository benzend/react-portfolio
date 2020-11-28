import { Box, Button, Typography } from "@material-ui/core";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Footer } from "../Footer";

const StyledSection = styled.div`
  background: rgb(112, 168, 255);
  background: linear-gradient(
    34deg,
    rgba(112, 168, 255, 1) 0%,
    rgba(129, 199, 255, 1) 100%
  );
  padding: 6%;
  margin: 8% 0;
  border-radius: 10px;
  button {
    margin-top: 30px;
  }
`;

export default function HomeContactSection() {
  return (
    <StyledSection>
      <Box textAlign="center" padding="10px 0 30px">
        <Typography variant="h5" component="h3">
          Projects
        </Typography>
      </Box>
      <Box textAlign="center" width="300px" margin="auto">
        <Carousel
          showThumbs={false}
          transitionTime={800}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div>
            <img src=".\images\thumbnails\TicTacToe-example-thumbnail.png" />
            <p className="legend">Tic-Tac-Toe</p>
          </div>
          <div>
            <img src=".\images\thumbnails\LanguageApp-thumbnail.png" />
            <p className="legend">Language Learning App</p>
          </div>
          <div>
            <img src=".\images\thumbnails\Accounting-Website-example-thumbnail.png" />
            <p className="legend">Accounting Website</p>
          </div>
          <div>
            <img src=".\images\Pomodoro Timer - Google Chrome 10_13_2020 12_17_19 AM.png" />
            <p className="legend">Pomodoro Timer</p>
          </div>
        </Carousel>
        <Link to="projects">
          <Button color="secondary">See More</Button>
        </Link>
      </Box>
    </StyledSection>
  );
}
