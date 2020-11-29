import styled from "styled-components";

import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";

const StyledFooter = styled.footer`
  display: flex;
  padding: 1.3rem;
  background: rgb(0, 61, 125);
  background: linear-gradient(
    34deg,
    rgba(0, 61, 125, 1) 0%,
    rgba(0, 84, 166, 1) 100%
  );
  justify-content: center;
  align-items: center;
  a {
    margin: 5px;
    color: lightBlue;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter className="footer">
      <a href="http://madeunlinked.com">@madeunlinked</a>
      <a rel="noreferrer" href="https://github.com/benzend" target="_blank">
        <GitHub />
      </a>
      <a rel="noreferrer" href="https://twitter.com/TheBenzend" target="_blank">
        <Twitter />
      </a>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/benjamin-scott-62a3741b1/"
        target="_blank"
      >
        <LinkedIn />
      </a>
    </StyledFooter>
  );
};
