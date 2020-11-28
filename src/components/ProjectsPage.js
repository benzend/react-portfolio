import { Nav } from "./index";
import Projects from "./projectsPage__components/Projects";
import Typography from "@material-ui/core/Typography";
import { Footer } from "./Footer";

import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 30px;
`;

export const ProjectsPage = () => {
  return (
    <div>
      <Nav />
      <Typography className="center" variant="h4" componet="h2">
        Projects
      </Typography>
      <Projects />
      <StyledDiv>
        <Footer />
      </StyledDiv>
    </div>
  );
};
