import { Box, IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuOpen } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
    zIndex: 10,
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      backgroundColor: "black",
      top: 0,
      left: 0,
      width: "300px",
      transform: "translateX(-100%)",
      transition: "transform 1s ease",
      "&.open": {
        transform: "translateX(0)",
      },
    },
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      color: "white",
      width: "50px",
      height: "50px",
      margin: "10px",
      fontSize: "3rem",
      zIndex: 20,
    },
  },
  actualHam: {
    backgroundColor: "#0008",
    borderRadius: "10px",
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
      boxShadow: "0 3px 20px #000c",
    },
    "&.active": {
      top: 0,
    },
  },
}));

export const HomeNav = () => {
  const { root, links, hamburger, actualHam } = useStyles();

  const [animated, setAnimated] = useState([]);

  const [navOpen, setNavOpen] = useState(false);

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
  } else if (animated[0] && animated[1] && animated[2] && !animated[3]) {
    const anim = [...animated];
    anim[3] = true;
    console.log("hey");
    setTimeout(() => {
      setAnimated(anim);
    }, 600);
  } else if (animated[0] && animated[1] && animated[2] && animated[3]) {
    // do nothing
  }

  return (
    <>
      <IconButton onClick={() => setNavOpen(!navOpen)} className={hamburger}>
        <MenuOpen className={actualHam} fontSize="inherit" />
      </IconButton>
      <Box className={navOpen ? "open " + root : root} component="nav">
        <a className={animated[0] ? links + " active" : links} href="#projects">
          Projects
        </a>
        <a className={animated[1] ? links + " active" : links} href="#about">
          About
        </a>
        <a className={animated[2] ? links + " active" : links} href="#contact">
          Get In Touch
        </a>
        <Link className={animated[3] ? links + " active" : links} to="/blog">
          Blog
        </Link>
      </Box>
    </>
  );
};
