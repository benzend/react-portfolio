import HomeHeaderTitle from "./HomeHeaderTitle";
import HomeHeaderSubtitle from "./HomeHeaderSubtitle";
import { Box, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "1rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "80px",
      height: "60vh",
    },
  },
  img: {
    [theme.breakpoints.up("md")]: {
      width: "350px",
      position: "relative",
      top: "10%",
      left: "-20%",
    },
  },
  headerTxt: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "10%",
      position: "relative",
      top: "-28%",
    },
  },
}));

function HomeHeader() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img
        className={classes.img}
        src="https://img.icons8.com/bubbles/256/000000/user-male.png"
        alt="Cartoonized profile"
      />
      <Box className={classes.headerTxt}>
        <HomeHeaderTitle />
        <HomeHeaderSubtitle />
      </Box>
    </header>
  );
}

export default HomeHeader;
