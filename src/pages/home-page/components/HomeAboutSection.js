import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6%",
    margin: "8% 0",
    borderRadius: "10px",
  },
  root900: {
    margin: "30% 0",
  },
  text: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  },
  btn: {
    [theme.breakpoints.up("lg")]: {},
  },
}));

export const HomeAboutSection = ({ media900 }) => {
  const classes = useStyles();
  return (
    <section className={media900 ? classes.root900 : classes.root}>
      <Box textAlign="center" padding="10px 0 30px">
        <Typography variant="h3" component="h3">
          About
        </Typography>
      </Box>
      <Box textAlign="center" margin="0 3rem">
        <Typography
          className={classes.text}
          color="textPrimary"
          variant="body1"
        >
          As a passionate developer, my goals are to keep progressing in all
          areas of web development. From frontend to back, my skills will keep
          moving forward by building and learning everything that I can.
        </Typography>
        <br />
        <div className="btn-container">
          <Link to="about">
            <Button className={classes.btn} color="primary">
              Read More
            </Button>
          </Link>
        </div>
      </Box>
    </section>
  );
};
