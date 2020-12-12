import HomeHeaderTitle from "./HomeHeaderTitle";
import HomeHeaderSubtitle from "./HomeHeaderSubtitle";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "80px",
      height: "60vh",
    },
  },
  headerTxt: {
    //   [theme.breakpoints.up("md")]: {
    //     marginLeft: "10%",
    //     position: "relative",
    //     top: "-28%",
    //   },
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
