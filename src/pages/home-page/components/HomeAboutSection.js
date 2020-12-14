import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6%",
    margin: "8% 0",
    borderRadius: "10px",
  },
  title: {
    transform: "translateY(-50px)",
    opacity: 0,
    transition: "all 1s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  text: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
    transform: "translateX(40px)",
    opacity: 0,
    transition: "all 1s ease",
    "&.active": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  btn: {
    [theme.breakpoints.up("lg")]: {},
    transform: "translateY(40px)",
    opacity: 0,
    transition: "transform 1s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
}));

export const HomeAboutSection = ({ yoffset }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Box textAlign="center" padding="10px 0 30px">
        <Typography
          className={yoffset > 1050 ? "active " + classes.title : classes.title}
          variant="h3"
          component="h3"
        >
          About
        </Typography>
      </Box>
      <Box textAlign="center" margin="0 3rem">
        <Typography
          className={yoffset > 1060 ? "active " + classes.text : classes.text}
          color="textPrimary"
          variant="body1"
        >
          As a passionate developer, my goals are to keep progressing in all
          areas of web development. From front-end to back, my skills will keep
          moving forward by building and learning everything that I can.
        </Typography>
        <br />
        <div className="btn-container">
          <Link to="about">
            <Button
              className={yoffset > 1070 ? "active " + classes.btn : classes.btn}
              color="primary"
            >
              Read More
            </Button>
          </Link>
        </div>
      </Box>
    </section>
  );
};
