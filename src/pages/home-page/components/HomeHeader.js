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
    [theme.breakpoints.down("md")]: {},
  },
  title: {
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
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
