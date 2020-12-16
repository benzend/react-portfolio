import { Typography, makeStyles, Box, Container } from "@material-ui/core";

import { BlogNav } from "./blog-page/components/BlogNav";

const useStyles = makeStyles((theme) => ({
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
    <Box>
      <BlogNav />
      <Box className={header} component="header">
        <Typography color="textPrimary" component="h1" variant="h3">
          MadeUnlinked
        </Typography>
        <Typography color="textSecondary" component="h2" variant="h4">
          Web Development for Beginners
        </Typography>
      </Box>
      <Container maxWidth="sm" component="main">
        <Typography color="textPrimary" variant="body1">
          There isn't anything here yet but that doesn't mean there I'm not
          currently working on making some tutorials for those who want the
          extra material.
        </Typography>
      </Container>
    </Box>
  );
};
