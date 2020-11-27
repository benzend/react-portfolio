import { Nav } from "./index";
import Projects from "./projectsPage__components/Projects";
import Typography from "@material-ui/core/Typography";

export const ProjectsPage = () => {
  return (
    <div>
      <Nav />
      <Typography variant="h4" componet="h2">
        Projects
      </Typography>
      <Projects />
    </div>
  );
};
