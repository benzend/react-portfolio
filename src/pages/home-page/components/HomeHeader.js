import HomeHeaderTitle from "./HomeHeaderTitle";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "80px",
      height: "60vh",
    },
  },
  title: {
    // textShadow: "3px 3px 5px #0009",
    [theme.breakpoints.up("md")]: {
      fontSize: "3.8rem",
      fontWeight: "800",
    },
  },
  subtitle: {
    // textShadow: "3px 3px 5px #0009",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
  },
}));

export const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header} component="header">
      <HomeHeaderTitle headerTxt={classes.title} subtitle={classes.subtitle} />
    </Box>
  );
};
