import {
  Box,
  makeStyles,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { LinkMenu } from "./blog-nav-components/LinkMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    height: "60px",
    width: "100%",
    background: "#653FFFdd",
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
  const { root, container, links, link, title } = useStyles();

  return (
    <Box className={root} component="nav">
      <Container className={container}>
        <Box>
          <Typography className={title} variant="h5">
            MadeUnlinked
          </Typography>
        </Box>
        <Box className={links}>
          <Button>
            <Link to="#" className={link}>
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
