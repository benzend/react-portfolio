import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    position: "relative",
    top: "-100vh",
    left: 0,
    color: "#fff",
    padding: "1rem 3vw",
    fontSize: "1.3rem",
    transition: "top 2s ease, background .3s ease, color .3s ease",
    borderRadius: "0 10px 10px 0",
    "&:hover": {
      color: "#000",
      backgroundColor: "#fffa",
    },
    "&.active": {
      top: 0,
    },
  },
});

export const Nav = () => {
  const { root, links } = useStyles();

  const [animated, setAnimated] = useState([]);

  useEffect(() => {
    const anim = [...animated];
    anim[0] = true;
    setAnimated(anim);
  }, []);

  if (animated[0] && !animated[1] && !animated[2]) {
    const anim = [...animated];
    anim[1] = true;
    setTimeout(() => {
      setAnimated(anim);
    }, 600);
  } else if (animated[0] && animated[1] && !animated[2]) {
    const anim = [...animated];
    anim[2] = true;
    setTimeout(() => {
      setAnimated(anim);
    }, 600);
  } else if (animated[0] && animated[1] && animated[2]) {
    const anim = [...animated];
    anim[3] = true;
    setTimeout(() => {
      setAnimated(anim);
    }, 600);
  }

  return (
    <Box className={root} component="nav">
      <a className={animated[0] ? links + " active" : links} href="#projects">
        Projects
      </a>
      <a className={animated[1] ? links + " active" : links} href="#contact">
        Get In Touch
      </a>
      <Link className={animated[2] ? links + " active" : links} to="/about">
        About
      </Link>
      <Link className={animated[3] ? links + " active" : links} to="/blog">
        Blog
      </Link>
    </Box>
  );
};
