import HomeContactSection from "./HomeContactSection";
import HomeProjectsSection from "./HomeProjectsSection";
import HomeAboutSection from "./HomeAboutSection";

import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 1000px;
  margin: auto;
  @media (min-width: 900px) {
    h3 {
      font-size: 2.2rem;
    }
    display: flex;
    margin-bottom: 180px;
    button {
      font-size: 1rem;
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
