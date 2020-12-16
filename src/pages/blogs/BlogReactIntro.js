import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  headerStyle: {
    margin: "5rem 0 2rem",
  },
  nav: {
    minWidth: "30%",
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    background: "#f7f7f7",
  },
  content: {
    width: "70%",
  },
}));

export const BlogReactIntro = () => {
  const { headerStyle, root, nav, content } = useStyles();
  return (
    <Box className={root}>
      <Box className={content}>
        <Box className={headerStyle} component="header">
          <Typography
            color="textPrimary"
            align="center"
            variant="h3"
            component="h1"
          >
            An Introduction to React
          </Typography>
        </Box>

        <Typography
          align="center"
          color="textPrimary"
          variant="h4"
          component="h2"
        >
          What is React?
        </Typography>
        <Typography color="textPrimary" variant="body1">
          React is a JavaScript library unlike Angular and Vue. It is highly
          effecive for SPA's (single page applications) and contains an
          effective state management system.
        </Typography>
      </Box>
      <Box className={nav}>
        <Button>Intro</Button>
      </Box>
    </Box>
  );
};
