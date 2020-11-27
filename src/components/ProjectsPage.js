import { Nav } from "./index";
import Projects from "./projectsPage__components/Projects";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

export const ProjectsPage = () => {
  return (
    <div>
      <Nav />
      <Typography className="center" variant="h4" componet="h2">
        Projects
      </Typography>
      <Projects />
    </div>
  );
};
