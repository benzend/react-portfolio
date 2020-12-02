import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "rgb(112, 168, 255)",
    background:
      "linear-gradient(34deg,rgba(112, 168, 255, 1) 0%,rgba(129, 199, 255, 1) 100%)",
    padding: "6%",
    margin: " 8% 0",
    borderRadius: "10px",
    button: {
      marginTop: "30px",
    },
  },
  root900: {
    margin: "10% 2%",
  },
});

export default function HomeContactSection({ media900 }) {
  const classes = useStyles();

  return (
    <section className={media900 ? classes.root900 : classes.root}>
      <Box textAlign="center" padding="10px 0 30px">
        <Typography variant="h5" component="h3">
          Projects
        </Typography>
      </Box>
      <Box className="box" textAlign="center" width="auto" margin="auto">
        <Carousel
          showThumbs={false}
          transitionTime={800}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div>
            <img
              src={
                media900
                  ? "./images/TicTacToe-example.png"
                  : "./images/thumbnails/TicTacToe-example-thumbnail.png"
              }
              alt="tic-tac-toe project example"
            />
            <p className="legend">Tic-Tac-Toe</p>
          </div>
          <div>
            <img
              src={
                media900
                  ? "./images/language-app.png"
                  : "./images/thumbnails/LanguageApp-thumbnail.png"
              }
              alt="language learning project example"
            />
            <p className="legend">Language Learning App</p>
          </div>
          <div>
            <img
              src={
                media900
                  ? "./images/Accounting-Website-example.png"
                  : "./images/thumbnails/Accounting-Website-example-thumbnail.png"
              }
              alt="Accounting website project example"
            />
            <p className="legend">Accounting Website</p>
          </div>
          <div>
            <img
              src={
                media900
                  ? "./images/pomodoro-timer.png"
                  : "./images/thumbnails/PomodoroTimer-thumbnail.png"
              }
              alt="Pomodoro timer project example"
            />
            <p className="legend">Pomodoro Timer</p>
          </div>
        </Carousel>
        <div className="btn-container">
          <Link to="projects">
            <Button color="secondary">See More</Button>
          </Link>
        </div>
      </Box>
    </section>
  );
}
