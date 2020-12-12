import {
  HomeContactSection,
  HomeProjectsSection,
  HomeAboutSection,
} from "./index";

import { Container, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff2e6",
    boxShadow: "0 10px 50px #0008",
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
