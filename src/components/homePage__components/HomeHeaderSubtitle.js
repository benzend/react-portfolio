import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const StyledDiv = styled.div`
  text-shadow: 3px 3px 5px #0009;
  @media (min-width: 700px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

function HomeHeaderSubtitle() {
  return (
    <StyledDiv className="header__subtitle">
      <Typography component="h2" variant="h5">
        Frontend Web Developer
      </Typography>
    </StyledDiv>
  );
}

export default HomeHeaderSubtitle;
