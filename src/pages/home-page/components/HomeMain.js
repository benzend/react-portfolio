import {
  HomeContactSection,
  HomeProjectsSection,
  HomeAboutSection,
} from "./index";

import { Container, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff2e644",
    boxShadow: "0 20px 60px #0008",
    borderRadius: "20px",
    marginTop: "5rem",
  },
});

export const HomeMain = () => {
  const { root } = useStyles();
  return (
    <Container maxWidth="95vw">
      <Card className={root}>
        <Container>
          <HomeProjectsSection />
          <HomeAboutSection />
          <HomeContactSection />
        </Container>
      </Card>
    </Container>
  );
};
