import { Box, Typography, makeStyles, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6%",
    margin: "8% 0",
    borderRadius: "10px",
  },
  card: {
    width: "fit-content",
    margin: "auto",
    padding: "2rem",
  },
  title: {
    transform: "translateY(-50px)",
    opacity: 0,
    transition: "all 1s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      textAlign: "left",
    },
    transform: "translateX(40px)",
    opacity: 0,
    transition: "all 1s ease",
    maxWidth: "800px",
    textAlign: "left",
    margin: "auto",
    "&.active": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  btn: {
    [theme.breakpoints.up("lg")]: {},
    transform: "translateY(40px)",
    opacity: 0,
    transition: "transform 1s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0",
  },
  extraContainer: {
    height: "0px",
    overflow: "hidden",
    transition: "height .8s ease",
    "&.open": {
      height: "500px",
      [theme.breakpoints.down("md")]: {
        height: "900px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "1200px",
      },
    },
  },
}));

export const HomeAboutSection = ({ yoffset }) => {
  const classes = useStyles();

  return (
    <Box id="about" className={classes.aboutSection}>
      <Box component="section" className={classes.root}>
        <Box textAlign="center" padding="10px 0 30px">
          <Typography
            className={
              yoffset > 1050 ? "active " + classes.title : classes.title
            }
            variant="h2"
            component="h3"
          >
            About
          </Typography>
        </Box>
        <Card className={classes.card}>
          <Box
            className={
              yoffset > 1060
                ? "active " + classes.textContainer
                : classes.textContainer
            }
          >
            <Typography color="textPrimary" variant="h6">
              An Introduction to Who I Am
            </Typography>
            <Typography color="textSecondary" variant="body1">
              As an extremely proficient and motivated self-taught developer, I
              have learned vast amounts of information in a short time, becoming
              exceptionally versed in, not only web development, but have gained
              business rationality, networking skills, design sense, have
              furthered my logical perpectives, since when I started from
              nothing six months ago. I could barley navigate through folders in
              the beginning, as tech is not very prevalent in Idaho.
            </Typography>
            <Typography color="textPrimary" variant="h6">
              My Current Focus
            </Typography>
            <Typography color="textSecondary" variant="body1">
              React is my current focus. I have been expanding my knowledge
              surrounding everything about React for the last 2 months, testing
              out Next.js, Gatsby.js, Material UI, Styled-Components,
              React-Router-Dom, TypeScript, Redux, higher order functions,
              classical React and its current version.
            </Typography>
            <Typography color="textSecondary" variant="body1">
              What I'm doing with React is solving logical problems and
              discovering coding techniques using it. My goal is to achieve a
              high level of efficiency with it, becoming extraordinarily fluent
              in it, and knowing it like the back of my hand.
            </Typography>
            {/* <Typography color="textPrimary" variant="h6">
            A Breakdown of These Six Months
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Chronilogically, we'll start with HTML and CSS, as it is the
            foundation of what all of this is built upon.
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Going through a bunch of content from multiple sources (the way I
            like to so I can gain different ways of doing things, thus having a
            larger toolset), I found myself working and learning 16 hours a day
            frequently as the passion to jump into the tech field was burning
            through me. I still try to put in as much time as I can into web
            development, tending to a goal of 12 hours per day.
          </Typography>
          <Typography color="textPrimary" variant="h6">
            HTML
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Back to the topic of HTML and CSS, I learned about all of its ins
            and outs. Semantic HTML, aria labels, HTML grids, how to properly
            layout a head, SEO practices, lists, tab indexes, image and video
            element structuring, forms with all of the various inputs, and I'm
            still learning as much as I can to this day.
          </Typography>
          <Typography color="textPrimary" variant="h6">
            CSS
          </Typography>
          <Typography color="textSecondary" variant="body1">
            CSS is actually pretty complex as it has grown over the years.
            Things like CSS grid, flex box, CSS variables, :root, seperation of
            concerns (separating CSS files per project), creating utility files,
            CSS animations, floats (old-school), modals, responsive design,
            centering, there's just way too much for me to layout right here and
            now. Just know that I have a vast amount of knowledge in both HTML
            and CSS. Oh and can't forget about tools like SCSS, Bootstrap, and
            Material.
          </Typography>
          <Typography color="textPrimary" variant="h6">
            JavaScript
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Oddly, I started out learning the old-school way (pre ES6) before
            actually knowing anything about the current standard of JavaScript.
            Vars, in the beginning, were my go-to. I ended up learning from
            other developers about ES6 and even ended up taking another
            JavaScript course. My JS skills when I was vanilla-ing it up were
            extremely proficient (they still are) and I could fly through
            problems like nothing. I still have not found a problem that I could
            not solve to this day.
          </Typography>
          <Typography color="textSecondary" variant="body1">
            After becoming fluent in JavaScript, I dabbled with JQuery, which is
            nice but I couldds do a lot in JS that I could do with JQuery.
          </Typography>
          <Typography color="textPrimary" variant="h6">
            React
          </Typography>
          <Typography color="textSecondary" variant="body1">
            It took me about four days to pick up React.js and start building
            projects with it. I also started out with the older method of using
            it, writing class based components and rolling with its setState and
            this.state everywhere.
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Transitioning to React Hooks, I immediately fell in love with
            useState. Its simplicity really helped everything flow together.
            I've also worked with Vue but I really do enjoy how React is layed
            out. It just hits different.
          </Typography>
          <Typography color="textSecondary" variant="body1">
            I have dabbled in Next.js, Gatsby.js, I've used Redux in a couple of
            projects, and I've also come to really like the TypeScript/React
            combo.
          </Typography> */}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
