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
    fontWeight: 800,
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
    <Box className={root}>
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
          tech="React"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl=""
          liveUrl=""
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/TicTacToe-example-thumbnail.png"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Tic Tac Toe"
          techStyle={techStyle}
          tech="JavaScript"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl=""
          liveUrl=""
        />
        <Project
          img={img}
          imgSource="./images/thumbnails/Accounting-Website-example-thumbnail.png"
          imgContainer={imgContainer}
          imgOverlay={imgOverlay}
          imgTitleStyle={imgTitle}
          imgTitle="Accounting Website"
          techStyle={techStyle}
          tech="JQuery"
          projBtnsStyle={projBtns}
          btnsContainer={btnsContainer}
          gitHubUrl=""
          liveUrl=""
        />
      </Grid>
    </Box>
  );
};
