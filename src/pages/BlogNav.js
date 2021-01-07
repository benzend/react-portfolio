import { useState } from "react";
import {
  Box,
  makeStyles,
  Container,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { LinkMenu } from "./blog-page/components/blog-nav-components/LinkMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    left: 0,
    height: "60px",
    width: "100%",
    zIndex: 5,
    background: "#653FFFdd",
    transition: "height 1s ease",
    [theme.breakpoints.down("sm")]: {
      overFlow: "hidden",
      "&.open": {
        height: "300px",
        // change z-index on 'active' because when not
        // active the menu button on a blog page is unclickable.
        // set zIndex below menu btn before but when active
        // zIndex is larger
        zIndex: 10,
      },
    },
  },
  arrowDownwardContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "fixed",
      right: "10px",
      top: "7px",
      color: "white",
      zIndex: 4,
      transition: "transform 1s ease",
      "&.active": {
        transform: "translateY(200px) rotate(180deg)",
      },
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      opacity: 0,
      transition: "opacity 1s ease",
      "&.active": {
        opacity: 1,
      },
    },
  },
  link: {
    color: "white",
    minWidth: "auto",
  },
  title: {
    color: "white",
  },
}));

export const BlogNav = () => {
  const [open, setOpen] = useState(false);
  const {
    root,
    container,
    links,
    link,
    title,
    arrowDownwardContainer,
  } = useStyles();

  return (
    <Box className={open ? root + " open" : root} component="nav">
      <IconButton
        onClick={() => setOpen(!open)}
        className={
          open ? arrowDownwardContainer + " active" : arrowDownwardContainer
        }
      >
        <ArrowDownward />
      </IconButton>
      <Container className={container}>
        <Box>
          <Typography className={title} variant="h5">
            MadeUnlinked
          </Typography>
        </Box>
        <Box className={open ? links + " active" : links}>
          <Button>
            <Link to="/blog" className={link}>
              Home
            </Link>
          </Button>
          <LinkMenu
            linkName="React"
            linkStyle={link}
            menuItems={[
              { title: "An Introduction to React", link: "/blog/react/intro" },
            ]}
          />
          <LinkMenu
            linkName="JavaScript"
            linkStyle={link}
            menuItems={[{ title: "There is nothing here yet", link: "/blog" }]}
          />
          <LinkMenu
            linkName="HTML"
            linkStyle={link}
            menuItems={[{ title: "There is nothing here yet", link: "/blog" }]}
          />
          <LinkMenu
            linkName="CSS"
            linkStyle={link}
            menuItems={[{ title: "There is nothing here yet", link: "/blog" }]}
          />
          <Button className={link}>
            <Link to="/" className={link}>
              Portfolio
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
