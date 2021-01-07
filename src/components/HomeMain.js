import { Container, Card, makeStyles } from "@material-ui/core";

import {
  HomeContactSection,
  HomeProjectsSection,
  HomeAboutSection,
} from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#fffefe",
    boxShadow: "0 20px 60px #0003",
    borderRadius: "20px",
    marginTop: "7rem",
    transition: "transform .1s linear",
  },
  container: {
    maxWidth: "90vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

export const HomeMain = ({ yoffset }) => {
  const { root, container } = useStyles();

  return (
    <Container className={container}>
      <Card className={root}>
        <Container>
          <HomeProjectsSection yoffset={yoffset} />
          <HomeAboutSection yoffset={yoffset} />
          <HomeContactSection yoffset={yoffset} />
        </Container>
      </Card>
    </Container>
  );
};
