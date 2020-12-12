import {
  HomeContactSection,
  HomeProjectsSection,
  HomeAboutSection,
} from "./index";

import { makeStyles, Container } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: '1000px',
//     margin: 'auto',
//   },
//   button: {

//   }
// })

export const HomeMain = () => {
  return (
    <Container>
      <HomeProjectsSection />
      <HomeAboutSection />
      <HomeContactSection />
    </Container>
  );
};
