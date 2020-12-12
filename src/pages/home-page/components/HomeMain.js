import {
  HomeContactSection,
  HomeProjectsSection,
  HomeAboutSection,
} from "./index";

import { Container } from "@material-ui/core";

export const HomeMain = () => {
  return (
    <Container>
      <HomeProjectsSection />
      <HomeAboutSection />
      <HomeContactSection />
    </Container>
  );
};
