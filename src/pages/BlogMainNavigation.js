import { Typography, makeStyles, Box, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {},
  title: {},
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
}));

export const BlogMainNavigation = () => {
  const { header } = useStyles();
  return (
    <>
      <Box className={header} component="header">
        <Typography color="textPrimary" component="h1" variant="h3">
          MadeUnlinked
        </Typography>
        <Typography color="textSecondary" component="h2" variant="h4">
          Web Development for Beginners
        </Typography>
      </Box>
      <Container maxWidth="sm" component="main">
        <Typography align="center" color="textPrimary" variant="body1">
          <Link to="/blog/react/intro">An Introduction to React</Link>
        </Typography>
      </Container>
    </>
  );
};
