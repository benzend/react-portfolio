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
  contentBox: {
    width: "70%",
  },
  contentContainer: {},
}));

export const BlogReactIntro = () => {
  const { headerStyle, root, nav, contentBox, contentContainer } = useStyles();
  return (
    <Box className={root}>
      <Box className={contentBox}>
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
        <Container className={contentContainer} maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
            component="h2"
          >
            What is React?
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            React is a JavaScript library unlike Angular and Vue. It is known
            for its state management system, rendering out only the things that
            need to be rendered at a specific point in time. It uses a single
            HTML file to "inject" whatever you have built in the corresponding
            JavaScript files, giving it the ability to be dymanically rendered,
            making things like loading different pages to be much quicker. As a
            component based library, you create a JavaScript file for each
            component, making organization cleaner and easier to navigate.
          </Typography>
        </Container>
      </Box>
      <Box className={nav}>
        <Button>An Introduction to React</Button>
        <Button>What is React?</Button>
      </Box>
    </Box>
  );
};
