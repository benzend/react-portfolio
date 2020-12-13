import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import { Project } from "./Project";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: " 8% 0",
    [theme.breakpoints.up("md")]: {},
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
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

export const HomeProjectsSection = () => {
  const {
    root,
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
      <Typography className={title} variant="h3" component="h3">
        Projects
      </Typography>
      <Grid spacing={5} justify="center" direction="row" container>
        <Project
          img={img}
          imgSource="./images/thumbnails/languageApp-thumbnail.png"
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
          imgSource="./images/thumbnails/todo-list-thumbnail.png"
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
          imgSource="./images/thumbnails/TicTacToe-example-thumbnail.png"
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
