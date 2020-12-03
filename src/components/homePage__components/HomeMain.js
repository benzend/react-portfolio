import HomeContactSection from "./HomeContactSection";
import HomeProjectsSection from "./HomeProjectsSection";
import HomeAboutSection from "./HomeAboutSection";

import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 1000px;
  margin: auto;
  @media (min-width: 900px) {
    margin-bottom: 180px;
    button {
      font-size: 1rem;
    }
    h3 {
      font-size: 2.3rem;
    }
  }
`;

function HomeMain() {
  return (
    <StyledMain className="main">
      <HomeProjectsSection />
      <HomeAboutSection />
      <HomeContactSection />
    </StyledMain>
  );
}

export default HomeMain;
