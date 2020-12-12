import HomeHeaderTitle from "./HomeHeaderTitle";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    // [theme.breakpoints.up("md")]: {},
  },
  title: {
    fontSize: "3.8rem",
    fontWeight: "800",
    // [theme.breakpoints.up("md")]: {
    // },
  },
  subtitle: {
    fontSize: "1.8rem",
    // [theme.breakpoints.up("md")]: {
    // },
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
