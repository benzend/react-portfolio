import { useState, useEffect } from "react";
import { Container, Card, makeStyles } from "@material-ui/core";

import {
  HomeContactSection,
  HomeProjectsSection,
  HomeAboutSection,
} from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#fff2e644",
    boxShadow: "0 20px 60px #0008",
    borderRadius: "20px",
    marginTop: "5rem",
    transition: "transform .1s ease",
  },
  container: {
    maxWidth: "90vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

export const HomeMain = () => {
  const { root, container } = useStyles();
  const [yoffset, setYoffset] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      setYoffset(window.pageYOffset);
    });
  }, []);

  return (
    <Container className={container}>
      <Card
        style={{ transform: `translateY(-${yoffset / 15}px)` }}
        className={root}
      >
        <Container>
          <HomeProjectsSection yoffset={yoffset} />
          <HomeAboutSection yoffset={yoffset} />
          <HomeContactSection yoffset={yoffset} />
        </Container>
      </Card>
    </Container>
  );
};
