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
      <Box width="300px" margin="auto">
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
        </Carousel>
        <Button style={{ marginTop: "30px" }}>See More</Button>
      </Box>
    </StyledSection>
  );
}
