import { Nav } from "./index";

import { Container, Typography } from "@material-ui/core";
import { Footer } from "./Footer";

export const AboutPage = () => {
  return (
    <>
      <Container>
        <Nav />
        <Typography color="primary" variant="h4" component="h3">
          Overview
        </Typography>
        <br />
        <Typography color="primary" variant="body1" component="p">
          Starting with HTML, CSS and JavaScript, I have been constantly using
          and studying these languages, learning from all sorts of material like
          FreeCodeCamp, YouTube, Udemy Courses, and little Mobile coding apps,
          to where I feel like I'm very comfortable and proficient with these
          concepts. I can build any responsive site with ease, using things
          like:
        </Typography>
        <br />
        <Typography color="primary" variant="body1" component="ul">
          <ul>
            <li>ES6 and ES5 syntax</li>
            <li>Flex Box</li>
            <li>Flex Grid (I prefer Flex Box)</li>
            <li>Semantic HTML</li>
            <li>CSS Variables</li>
            <li>Bootstrap</li>
            <li>Material</li>
            <li>SASS</li>
          </ul>
        </Typography>
        <br />

        <Typography color="primary" variant="body1" component="p">
          Not only have I been learning and practicing HTML, CSS and JavaScript
          for these last 5 months and not only put a minimum of 5 hours daily
          into web development, it's what I do pretty much all day, everyday,
          whether it be networking, making content, solving problems on Code
          Wars or actually placing my time into other projects.
        </Typography>
        <br />

        <Typography color="primary" variant="body1" component="p">
          <span class="underline">As a disclaimer:</span> I do leave some time
          for weekends with friends, taking my dog for walks and eating, and
          sometimes there are days where I don't put in the time but they are
          however rare.
        </Typography>
        <br />

        <Typography color="primary" variant="body1" component="p">
          I have done plenty of 12 hour days, constantly learning and putting in
          actual work and hopefully this all shows how serious I am about this
          career and my passion for coding, building and learning.
        </Typography>
        <br />

        <Typography color="primary" variant="h5" component="h3">
          React
        </Typography>
        <br />

        <Typography color="primary" variant="body1" component="p">
          I am currently placing my time into React.js and its corresponding
          MERN stack. I do have some familiarity (however my current focus is
          frontend) with Node.js, express and mongoose building REST API's. With
          React, I have a month worth of time building various applications and
          my current main project is a language learning Application applying
          react-router-dom, styled-components and other React packages.
        </Typography>
        <br />

        <Typography color="primary" variant="h5" component="h3">
          Education
        </Typography>
        <br />

        <Typography color="primary" variant="body1" component="p">
          I never obtain my knowledge from one source. I have used Free Code
          Camp, YouTube videos from people like Dev Ed, Brad Traversy, The Net
          Ninja, Free Code Camp, Tony Alicia, Chris Sean, Programming with Mosh
          and others that have created web development content. I have also
          learned from Udemy courses and from the Head First series. When it
          comes to mentorship, I have had one person review and give me guidance
          who is Adrian Bigaj, a lead front-end React developer with lots of
          experience.
        </Typography>

        <br />
      </Container>
      <Footer />
    </>
  );
};
