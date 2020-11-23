import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-shadow: 3px 3px 5px #0009;
`;

function HomeHeaderTitle() {
  return (
    <StyledDiv className="header__title">
      <Typography component="h1" variant="h4">
        Benjamin Scott
      </Typography>
    </StyledDiv>
  );
}

export default HomeHeaderTitle;
