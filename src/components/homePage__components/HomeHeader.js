import HomeHeaderTitle from "./HomeHeaderTitle";
import HomeHeaderSubtitle from "./HomeHeaderSubtitle";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledHeader = styled.header`
  font-size: 1rem;
  text-align: center;
`;

function HomeHeader() {
  return (
    <StyledHeader className="header">
      <img src="https://img.icons8.com/bubbles/256/000000/user-male.png" />
      <Box>
        <HomeHeaderTitle />
        <HomeHeaderSubtitle />
      </Box>
    </StyledHeader>
  );
}

export default HomeHeader;
