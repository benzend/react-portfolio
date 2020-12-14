import {
  Box,
  Button,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

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
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    transform: "translateX(40px)",
    opacity: 0,
    transition: "all 1s ease",
    maxWidth: "800px",
    textAlign: "center",
    margin: "auto",
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
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      <Box
        className={
          yoffset > 1060
            ? "active " + classes.textContainer
            : classes.textContainer
        }
      >
        <Typography color="textPrimary" variant="body1">
          As a passionate developer, my goals are to keep progressing in all
          areas of web development. From front-end to back, my skills will keep
          moving forward by building and learning everything that I can.
        </Typography>
      </Box>
      <br />
      <Box className={classes.btnContainer}>
        <Link to="about">
          <Button
            className={yoffset > 1070 ? "active " + classes.btn : classes.btn}
            color="primary"
          >
            Read More
          </Button>
        </Link>
      </Box>
    </section>
  );
};
