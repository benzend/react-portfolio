import HomeHeaderTitle from "./HomeHeaderTitle";
import HomeHeaderSubtitle from "./HomeHeaderSubtitle";
import { Box, makeStyles } from "@material-ui/core";

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

export const HomeHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Box className={classes.headerTxt}>
        <HomeHeaderTitle />
        <HomeHeaderSubtitle />
      </Box>
    </header>
  );
};