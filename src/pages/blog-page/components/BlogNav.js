import {
  Box,
  makeStyles,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { LinkMenu } from "./LinkMenu";

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
            link={link}
            menuItems={["React Hooks", "JSX", "Basics"]}
          />
          <LinkMenu
            linkName="JavaScript"
            link={link}
            menuItems={["React Hooks", "JSX", "Basics"]}
          />
          <LinkMenu
            linkName="HTML"
            link={link}
            menuItems={["React Hooks", "JSX", "Basics"]}
          />
          <LinkMenu
            linkName="CSS"
            link={link}
            menuItems={["React Hooks", "JSX", "Basics"]}
          />
          <Button>
            <Link to="/" className={link}>
              Portfolio
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
