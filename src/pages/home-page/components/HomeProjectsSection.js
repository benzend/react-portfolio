import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import { useState } from "react";
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
    boxShadow: "0 2px 7px #0006",
  },
  imgContainer: {
    // backgroundColor: "green",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
  },
  imgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "orange",
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
    fontWeight: 800,
    fontSize: "1.2rem",
  },
  techStyle: {
    fontWeight: 800,
    textAlign: "center",
    backgroundColor: "#c77800",
    width: "fit-content",
    color: "#fffd",
    margin: "auto",
    padding: "5px 10px",
    borderRadius: "10px",
  },
  projBtns: {},
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
        />
      </Grid>
    </Box>
  );
};
