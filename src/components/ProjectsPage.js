import { Nav } from "./index";
import Projects from "./projectsPage__components/Projects";
import Typography from "@material-ui/core/Typography";
import { Footer } from "./Footer";

import styled from "styled-components";
import { Container, makeStyles, useMediaQuery } from "@material-ui/core";

const StyledDiv = styled.div`
  margin-top: 30px;
`;

const useStyles = makeStyles({
  projects: {
    margin: "50px auto 100px ",
    maxWidth: "1400px",
  },
});

export const ProjectsPage = () => {
  const classes = useStyles();
  const media900 = useMediaQuery("(min-width: 900px)");
  return (
    <>
      <Nav />
      <Typography
        className="center"
        variant={media900 ? "h3" : "h4"}
        componet="h2"
      >
        Projects
      </Typography>
      <div className={media900 ? classes.projects : ""}>
        <Projects />
      </div>
      <StyledDiv>
        <Footer />
      </StyledDiv>
    </>
  );
};
