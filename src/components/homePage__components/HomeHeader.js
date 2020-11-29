import HomeHeaderTitle from "./HomeHeaderTitle";
import HomeHeaderSubtitle from "./HomeHeaderSubtitle";
import styled from "styled-components";
import { Box, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  headerTxt: {
    position: "relative",
    top: "-30%",
    left: "5%",
  },
});

const StyledHeader = styled.header`
  font-size: 1rem;
  text-align: center;
  @media (min-width: 900px) {
    margin-top: 80px;
    height: 60vh;
    img {
      width: 350px;
      position: relative;
      top: 10%;
      left: -17%;
      z-index: -1;
    }
  }
`;

function HomeHeader() {
  const classes = useStyles();
  const matches900 = useMediaQuery("(min-width: 900px");
  return (
    <StyledHeader className="header">
      <img
        src="https://img.icons8.com/bubbles/256/000000/user-male.png"
        alt="Cartoonized profile"
      />
      <Box className={matches900 ? classes.headerTxt : ""}>
        <HomeHeaderTitle />
        <HomeHeaderSubtitle />
      </Box>
    </StyledHeader>
  );
}

export default HomeHeader;
