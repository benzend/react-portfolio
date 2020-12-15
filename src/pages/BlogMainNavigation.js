import { Typography, makeStyles, Box } from "@material-ui/core";

import { BlogNav } from "./blog-page/components/BlogNav";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {},
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
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
      </Box>
    </Box>
  );
};
