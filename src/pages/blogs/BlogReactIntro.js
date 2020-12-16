import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
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
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
            component="h2"
          >
            React Structure
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            A very very simple example of what React looks like:
          </Typography>
          <pre className="code-block">
            <code>
              <span className="code-block--pink">import </span>
              <span className="code-block--lightBlue">React </span>
              {/* <span className="code-block--white">, {"{"}</span>
              <span className="code-block--yellow"> useState </span>
              <span className="code-block--white">{"}"} </span> */}
              <span className="code-block--pink">from </span>
              <span className="code-block--string">'react'</span>
              <span className="code-block--white">;</span>
            </code>
            <br />
            <br />
            <code>
              <span className="code-block--pink">export </span>
              <span className="code-block--blue">const </span>
              <span className="code-block--yellow">MyComponent </span>
              <span className="code-block--white">= </span>
              <span className="code-block--white">() </span>
              <span className="code-block--blue">{"=> "} </span>
              <span className="code-block--white">{"{"}</span>
            </code>
            {/* <br />
            <code>
              {"  "}
              <span className="code-block--blue">const </span>
              <span className="code-block--white">[</span>
              <span className="code-block--lightBlue">opened</span>
              <span className="code-block--white">, </span>
              <span className="code-block--yellow">isOpened</span>
              <span className="code-block--white">] </span>
              <span className="code-block--blue">= </span>
              <span className="code-block--yellow">useState</span>
              <span className="code-block--white">(</span>
              <span className="code-block--blue">false</span>
              <span className="code-block--white">);</span>
            </code> */}
            <br />
            <code>
              {"  "}
              <span className="code-block--pink">return </span>
              <span className="code-block--white">(</span>
            </code>
            <br />
            <code>
              {"    "}
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">div</span>
              <span className="code-block--gray">{">"} </span>
            </code>
            <br />
            <code>
              {"        "}
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">h1</span>
              <span className="code-block--gray">{">"}</span>
              <span className="code-block--white">Hello World!</span>
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">/h1</span>
              <span className="code-block--gray">{">"}</span>
            </code>
            <br />
            <code>
              {"    "}
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">/div</span>
              <span className="code-block--gray">{">"} </span>
            </code>
            <br />
            <code>
              {"  "}
              <span className="code-block--white">);</span>
            </code>
            <br />
            <code>
              <span className="code-block--white">};</span>
            </code>
          </pre>
        </Container>
      </Box>
      <Box className={nav}>
        <Button>An Introduction to React</Button>
        <Button>What is React?</Button>
      </Box>
    </Box>
  );
};
