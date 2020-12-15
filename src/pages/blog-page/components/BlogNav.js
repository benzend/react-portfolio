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
          <Link to="#" className={link}>
            Home
          </Link>
          <div className={link}>React</div>
          <div className={link}>JavaScript</div>
          <div className={link}>HTML</div>
          <div className={link}>CSS</div>
          <Link to="/" className={link}>
            Portfolio
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
