import { Box, makeStyles, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

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
          <Link className={link} to="/blog">
            Home
          </Link>
          <Link className={link} to="/blog/react">
            React
          </Link>
          <Link className={link} to="/blog/javascript">
            JavaScript
          </Link>
          <Link className={link} to="/blog/html">
            HTML
          </Link>
          <Link className={link} to="/blog/css">
            CSS
          </Link>
          <Link className={link} to="/">
            Portfolio
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
