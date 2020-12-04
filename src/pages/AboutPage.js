import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import {
  Container,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: "700px",
    margin: "3rem auto",
    backgroundColor: "#ff9800",
    borderRadius: "2rem",
  },
  heading: {
    textAlign: "center",
  },
  p: {
    marginBottom: "1.2rem",
    fontSize: "1.2rem",
  },
  underline: {
    textDecoration: "underline",
    fontSize: "1.2rem",
  },
});

export const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <Container>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.heading} variant="h5" component="h3">
              Overview
            </Typography>

            <Typography className={classes.p} variant="body1" component="p">
              Starting with HTML, CSS and JavaScript, I have been constantly
              using and studying these languages for the past 5-6 months,
              learning from all sorts of material like FreeCodeCamp, YouTube,
              Udemy Courses and Memo. I've gained enough experience from
              building roughly 20 projects (my own projects, not from tutorials)
              to where I'm highly skilled and proficient with them. I can build
              projects from the ground up with ease, whether it be with React or
              vanilla JS.
            </Typography>

            <Typography className={classes.p} variant="body1" component="p">
              <Typography className={classes.underline} component="span">
                As a disclaimer
              </Typography>
              : I do leave some time for weekends with friends, taking my dog
              for walks and eating, and sometimes there are days where I don't
              put in the time but they are however rare.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.heading} variant="h5" component="h3">
              React
            </Typography>

            <Typography className={classes.p} variant="body1" component="p">
              I am currently placing my time into React.js and its corresponding
              MERN stack. I do have some familiarity (however my current focus
              is frontend) with Node.js, express and mongoose building REST
              API's. With React, I have 2 months worth of time building various
              applications and my current main project is a language learning
              Application applying react-router-dom, styled-components and other
              NPM packages.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.heading} variant="h5" component="h3">
              Experience
            </Typography>
            <Typography className={classes.p} variant="body1" component="p">
              I am currently being mentored by Adrian Bigaj, a Senior Front-End
              Developer who has helped guide me into becoming an effective
              developer, training me on best practices, effective coding
              techniques like prefering immutability, and how to expertly work
              with React.js.
            </Typography>
            <Typography className={classes.p} variant="body1" component="p">
              I have collaborated on projects with friends and have been
              persistently building all sorts of projects, whether it be
              websites, games or applications.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.heading} variant="h5" component="h3">
              Education
            </Typography>

            <Typography className={classes.p} variant="body1" component="p">
              I never obtain my knowledge from one source. I have used Free Code
              Camp, YouTube videos from people like Dev Ed, Brad Traversy, The
              Net Ninja, Free Code Camp, Tony Alicia, Chris Sean, Programming
              with Mosh and others that have created web development content. I
              have also learned from Udemy courses and from the Head First
              series. LOTS of my learning comes from the actual experience (and
              Google).
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
};
