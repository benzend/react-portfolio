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

function HomeMain({ media900 }) {
  return (
    <StyledMain className="main">
      <HomeProjectsSection media900={media900} />
      <HomeAboutSection media900={media900} />
      <HomeContactSection media900={media900} />
    </StyledMain>
  );
}

export default HomeMain;
