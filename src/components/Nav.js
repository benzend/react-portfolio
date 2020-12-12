import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: "100vh",
    width: "40vw",
  },
  links: {
    color: "#fff",
    paddingLeft: "3vw",
    fontSize: "1.3rem",
  },
});

export const Nav = () => {
  const { root, links } = useStyles();
  return (
    <Box className={root} component="nav">
      <Link className={links} to="#projects">
        Projects
      </Link>
      <Link className={links} to="#contact">
        Get In Touch
      </Link>
      <Link className={links} to="/about">
        About
      </Link>
      <Link className={links} to="/blog">
        Blog
      </Link>
    </Box>
  );
};
