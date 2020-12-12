import HomeHeaderTitle from "./HomeHeaderTitle";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    background:
      "url('https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center center/cover",
    // [theme.breakpoints.up("md")]: {},
  },
  title: {
    // fontSize: "5rem",
    // fontWeight: "800",
    // [theme.breakpoints.up("md")]: {
    // },
    color: "white",
  },
  subtitle: {
    color: "white",
    // fontSize: "2.6rem",
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
