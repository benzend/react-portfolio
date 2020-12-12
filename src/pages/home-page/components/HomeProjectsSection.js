import {
  Box,
  Button,
  Typography,
  makeStyles,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "6%",
    // margin: " 8% 0",
    // borderRadius: "10px",
    // boxShadow: "0 8px 16px 0 #BDC9D7",
    // backgroundColor: "#fff2e6",
    [theme.breakpoints.up("md")]: {},
  },
  btnStyle: {
    marginTop: "30px",
  },
  title: {
    textAlign: "center",
  },
  box: {},
  img: {
    borderRadius: "10px",
    boxShadow: "0 2px 7px #0006",
  },
}));

export const HomeProjectsSection = () => {
  const classes = useStyles();
  // const media800 = useMediaQuery("(min-width: 800px)");

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h3" component="h3">
        Projects
      </Typography>
      <CardContent>
        <Grid spacing={5} justify="center" direction="row" container>
          <Grid item>
            <Box className={classes.box}>
              <img
                className={classes.img}
                src="./images/thumbnails/languageApp-thumbnail.png"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <img
                className={classes.img}
                src="./images/thumbnails/TicTacToe-example-thumbnail.png"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <img
                className={classes.img}
                src="./images/thumbnails/Accounting-Website-example-thumbnail.png"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box className={classes.box}>
              <img
                className={classes.img}
                src="./images/thumbnails/languageApp-thumbnail.png"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <img
                className={classes.img}
                src="./images/thumbnails/TicTacToe-example-thumbnail.png"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <img
                className={classes.img}
                src="./images/thumbnails/Accounting-Website-example-thumbnail.png"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      {/* <Box textAlign="center" padding="10px 0 30px">
        <Typography variant="h3" component="h3">
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
                media800
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
                media800
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
                media800
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
                media800
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
            <Button
              variant="outlined"
              className={classes.btnStyle}
              color="secondary"
            >
              See More
            </Button>
          </Link>
        </div>
      </Box> */}
      <Button variant="contained" className={classes.btnStyle} color="primary">
        See More
      </Button>
    </Box>
  );
};
