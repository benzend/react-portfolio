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
    position: "fixed",
    marginTop: "60px",
    padding: "1rem 0",
    height: "100vh",
    right: 0,
    top: 0,
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
              <span className="code-block--white">{"};"}</span>
            </code>
          </pre>
          <Typography align="center" color="textPrimary" variant="body1">
            As you can see from this, a React file tends to contain an import
            for 'React' in order to use it. However if you initially build an
            app with `<code>npx create-react-app</code>` then importing it isn't
            required.
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
            component="h2"
          >
            ES6
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            If you're unfamiliar with ES6 syntax which is commonly used in React
            then I would highly encourage you to brush up on your JavaScript as
            higher order functions like
            <code>.map</code> and <code>.filter</code> come in handy. Arrow
            functions are also prevelent and common to see in React code. (They
            look like this: <code>{"() => {}"}</code>) Oh and you can't forget
            about object and array destructuring. Now let's go ahead and jump
            into this code!
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
            component="h2"
          >
            JSX
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            What is JSX you ask? Well, it's HTML. No, wait, it just{" "}
            <em>looks</em> like HTML. Since React is a JavaScript library
            EVERYTHING in React is JavaScript. JSX is just a "syntactic sugar"
            that covers up the actual ugly code that lays behind it. JSX is
            this:
          </Typography>
          <pre className="code-block">
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
              <span className="code-block--white">)</span>
            </code>
          </pre>
          <Typography align="center" color="textPrimary" variant="body1">
            One of the best ways to know that you're working with JSX and not
            HTML is how setting up classes work. In normal, plain old HTML you
            would use `class` right? Like this:
          </Typography>
          <pre className="code-block">
            <code>
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">h1 </span>
              <span className="code-block--lightBlue">class</span>
              <span className="code-block--white">=</span>
              <span className="code-block--string">"title"</span>
              <span className="code-block--gray">{">"}</span>
              <span className="code-block--white">Hello World!</span>
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">/h1</span>
              <span className="code-block--gray">{">"}</span>
            </code>
          </pre>
          <Typography align="center" color="textPrimary" variant="body1">
            But guess what? Since everything IS JavaScript, you can't just write
            `class` because `class` is already defined in JavaScript as a
            function for making JavaScript classes! So instead we have:
          </Typography>
          <pre className="code-block">
            <code>
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">h1 </span>
              <span className="code-block--lightBlue">className</span>
              <span className="code-block--white">=</span>
              <span className="code-block--string">"title"</span>
              <span className="code-block--gray">{">"}</span>
              <span className="code-block--white">Hello World!</span>
              <span className="code-block--gray">{"<"}</span>
              <span className="code-block--blue">/h1</span>
              <span className="code-block--gray">{">"}</span>
            </code>
          </pre>
          <Typography align="center" color="textPrimary" variant="body1">
            className
          </Typography>
        </Container>
      </Box>
      <Box className={nav}>
        <Button>An Introduction to React</Button>
        <Button>What is React?</Button>
        <Button>React Structure</Button>
        <Button>ES6</Button>
        <Button>JSX</Button>
      </Box>
    </Box>
  );
};
