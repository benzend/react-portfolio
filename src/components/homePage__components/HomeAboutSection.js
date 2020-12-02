import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "rgb(112, 168, 255)",
    background:
      "linear-gradient(34deg, rgba(112, 168, 255, 1) 0%,    rgba(129, 199, 255, 1) 100%  )",
    padding: "6%",
    margin: "8% 0",
    borderRadius: "10px",
  },
  root900: {
    margin: "30% 0",
  },
});

export default function HomeAboutSection({ media900 }) {
  const classes = useStyles();
  return (
    <section className={media900 ? classes.root900 : classes.root}>
      <Box textAlign="center" padding="10px 0 30px">
        <Typography variant="h5" component="h3">
          About
        </Typography>
      </Box>
      <Box textAlign="center" margin="0 3rem">
        <Typography variant="body1">
          As a passionate developer, my goals are to keep progressing in all
          areas of web development. From frontend to back, my skills will keep
          moving forward by building and learning everything that I can.
        </Typography>
        <br />
        <div className="btn-container">
          <Link to="about">
            <Button color="secondary">Read More</Button>
          </Link>
        </div>
      </Box>
    </section>
  );
}
