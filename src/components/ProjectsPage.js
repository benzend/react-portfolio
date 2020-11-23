import Nav from "./Nav";
import Projects from "./projectsPage__components/Projects";
import Typography from "@material-ui/core/Typography";

export default function ProjectsPage() {
  return (
    <div>
      <Nav />
      <Typography variant="h3">Projects</Typography>
      <Projects />
    </div>
  );
}
