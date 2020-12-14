import { useState } from "react";
import { Box, Button, Typography, makeStyles, Grid } from "@material-ui/core";

import { AboutCard } from "./AboutCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6%",
    margin: "8% 0",
    borderRadius: "10px",
  },
  aboutSection: {},
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
    margin: "1rem 0",
  },
  extraContainer: {
    height: "0px",
    overflow: "hidden",
    transition: "height .8s ease",
    "&.open": {
      height: "500px",
      [theme.breakpoints.down("md")]: {
        height: "900px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "1200px",
      },
    },
  },
}));

export const HomeAboutSection = ({ yoffset }) => {
  const classes = useStyles();

  const [opened, setOpened] = useState(false);
  return (
    <Box id="about" className={classes.aboutSection}>
      <Box component="section" className={classes.root}>
        <Box textAlign="center" padding="10px 0 30px">
          <Typography
            className={
              yoffset > 1050 ? "active " + classes.title : classes.title
            }
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
            areas of web development. From front-end to back, my skills will
            keep moving forward by building and learning everything that I can.
          </Typography>
        </Box>

        <Box className={classes.btnContainer}>
          <Button
            className={yoffset > 1070 ? "active " + classes.btn : classes.btn}
            color="primary"
            onClick={() => setOpened(!opened)}
          >
            {opened ? "Read Less" : "Read More"}
          </Button>
        </Box>
        <Grid
          className={
            opened ? "open " + classes.extraContainer : classes.extraContainer
          }
          justify="space-around"
          container
        >
          <Grid item>
            <AboutCard>
              The one thing that has always pushed me forward in life is the
              ability to learn. Ever since highschool, I've always taken another
              step in the pursuit of knowledge, whether it be for something new,
              something that I was generally interested in, or something that I
              saw was useful.
            </AboutCard>
            <AboutCard>
              I always find myself trying to find something meaningful. Right
              now, this is following through with a career, specializing in a
              field that I see as valuable. Web development is an occupation
              where I see so many of its positives and benefits.
            </AboutCard>
          </Grid>
          <Grid item>
            <AboutCard>
              When it comes to the tech, I am currently placing my time into
              React.js. I like to integrate Material UI, building anything with
              an implication towards scalable apps (sometimes websites).
            </AboutCard>
            <AboutCard>
              I am currently being mentored by a lead front-end developer for
              the last month, partaking in building my skills in all the
              intricacies that web development comes with.
            </AboutCard>
          </Grid>

          <Grid item>
            <AboutCard>
              I have collaborated on projects with friends and have been
              persistently building all sorts of projects, whether it be
              websites, games or applications. I am constantly working on my
              skills every single day, treating this as a full time job.
            </AboutCard>
            <AboutCard>
              I never obtain my knowledge from one source. I have used Free Code
              Camp, YouTube videos from people like Dev Ed, Brad Traversy, The
              Net Ninja, Free Code Camp, Tony Alicia, Chris Sean, Programming
              with Mosh and others that have created web development content. I
              have also learned from Udemy courses and from the Head First
              series. LOTS of my learning comes from the actual experience (and
              Google). And some of it comes from working with other developers.
            </AboutCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
