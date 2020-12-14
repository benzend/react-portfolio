import { useEffect, useState } from "react";
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
  },
  title: {
    textShadow: "0 2px 5px #000c",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
    transform: "translateY(-100vh)",
    opacity: 0,
    transition: "all 2s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  subtitle: {
    textShadow: "0 2px 5px #000c",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
    transform: "translateY(-100vh)",
    opacity: 0,
    transition: "all 2s .3s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
}));

export const HomeHeader = () => {
  const { header, title, subtitle } = useStyles();

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(!active);
  }, []);

  return (
    <Box className={header} component="header">
      <HomeHeaderTitle
        headerTxt={active ? "active " + title : title}
        subtitle={active ? "active " + subtitle : subtitle}
      />
    </Box>
  );
};
