import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import { Project } from "./Project";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: " 8% 0",
    [theme.breakpoints.up("md")]: {},
  },
  projectsContainer: {
    transform: "translateX(40px)",
    opacity: 0,
    transition: "all 1s ease",
    "&.active": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
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
  img: {
    // borderRadius: "10px",
  },
  imgContainer: {
    // backgroundColor: "green",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 2px 7px #0006",
  },
  imgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#653FFFdd",
    height: "100%",
    width: "100%",
    zIndex: 2,
    transform: "translateY(-100%)",
    transition: "all .3s ease",
    "&.active": {
      transform: "translateY(0)",
    },
  },
  imgTitle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: "1.2rem",
  },
  techStyle: {
    fontWeight: 600,
    textAlign: "center",
    width: "fit-content",
    margin: "auto",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "10px",
  },
  projBtns: {
    backgroundColor: "green",
    color: "red",
  },
  btnsContainer: {
    margin: "10px",
    borderRadius: "8%",
    backgroundColor: "#653FFF",
    boxShadow: "0 2px 10px #0004",
  },
}));

export const HomeProjectsSection = ({ yoffset }) => {
  const {
    root,
    projectsContainer,
    title,
    img,
    imgContainer,
    imgOverlay,
    imgTitle,
    techStyle,
    projBtns,
    btnsContainer,
  } = useStyles();

  return (
    <Box id="projects" className={root}>
      <Typography
        className={yoffset > 300 ? "active " + title : title}
        variant="h2"
        component="h3"
      >
        Projects
      </Typography>
      <Grid
        className={
          yoffset > 300 ? "active " + projectsContainer : projectsContainer
        }
        spacing={5}
        justify="center"
        direction="row"
        container
      >
        <Project
          img={img}
          imgSource="./images/thumbnails/languageApp-thumbnail.png"
          imgAlt="a website with a matching game"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Language Learning App"
          techStyle={techStyle}
          tech=">>React<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/language-learning-app"
          liveUrl="https://thirsty-wright-d1d04e.netlify.app/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/react-api-thumbnail.png"
          imgAlt="an app with people and cards and a folder editor"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Person API"
          techStyle={techStyle}
          tech=">>React<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/react-api-handler"
          liveUrl="https://serene-kirch-b5fcfb.netlify.app/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/react-calculator_thumb.png"
          imgAlt="a calculator made with react and typescript"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="React Calculator"
          techStyle={techStyle}
          tech=">>React<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/react-typescript-calculator"
          liveUrl="https://quirky-kalam-6dc848.netlify.app/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/todo-list-thumbnail.png"
          imgAlt="a todo list"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="To-do List"
          techStyle={techStyle}
          tech=">>React<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/todo-application"
          liveUrl="https://quizzical-edison-93c715.netlify.app/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/tracker_thumbnail.png"
          imgAlt="Timer based on Trello"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Organizational Timer"
          techStyle={techStyle}
          tech=">>Vue<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/Zallyy/Tracker-App"
          liveUrl="https://trackerstats.netlify.app/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/TicTacToe-example-thumbnail.png"
          imgAlt="tic-tac-toe project example"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Tic Tac Toe"
          techStyle={techStyle}
          tech=">>JavaScript<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/tic-tac-toe"
          liveUrl="https://benzend.github.io/tic-tac-toe/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/Accounting-Website-example-thumbnail.png"
          imgAlt="a website design for accountants"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Accounting Website"
          techStyle={techStyle}
          tech=">>JQuery<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/accounting-website"
          liveUrl="https://benzend.github.io/accounting-website/"
        />

        <Project
          img={img}
          imgSource="./images/thumbnails/PomodoroTimer-thumbnail.png"
          imgAlt="a pomodoro timer with background and buttons"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Pomodoro Timer"
          techStyle={techStyle}
          tech=">>JavaScript<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/pomodoro-timer"
          liveUrl="https://benzend.github.io/pomodoro-timer/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/JumpStart-example-thumbnail.png"
          imgAlt="a website labeled jumpstart with design"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="JumpStart Website"
          techStyle={techStyle}
          tech=">>JavaScript<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/jumpstart-website"
          liveUrl="https://benzend.github.io/jumpstart-website/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/Mini-RPG-Game-example-thumbnail.png"
          imgAlt="there are CUBES EVERYWHERE"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Mini Game"
          techStyle={techStyle}
          tech=">>JavaScript<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/small-rpg-game"
          liveUrl="https://benzend.github.io/small-rpg-game/"
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/Portfolio-thumbnail.png"
          imgAlt="Ben's other portfolio example"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="An Old Portfolio"
          techStyle={techStyle}
          tech=">>JavaScript<<"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl="https://github.com/benzend/creative-portfolio"
          liveUrl="https://benzend.github.io/creative-portfolio/"
        />
      </Grid>
    </Box>
  );
};
