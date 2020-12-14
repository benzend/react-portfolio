import Projects from "./projects-page/components/Projects";
import Typography from "@material-ui/core/Typography";
import { Footer } from "../components/Footer";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

// refactor to one solution for styling
const StyledDiv = styled.div`
  margin-top: 30px;
`;

const useStyles = makeStyles((theme) => ({
  projects: {
    [theme.breakpoints.up("sm")]: {
      margin: "50px auto 100px ",
      maxWidth: "1400px",
    },
  },
}));

export const ProjectsPage = () => {
  const { projects } = useStyles();
  return (
    <>
      <Typography
        color="primary"
        className="center"
        variant="h3"
        component="h2"
      >
        Projects
      </Typography>
      <br />

      <div className={projects}>
        <Projects />
      </div>
      <StyledDiv>
        <Footer />
      </StyledDiv>
    </>
  );
};
