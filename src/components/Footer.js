import styled from "styled-components";

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

function Footer() {
  return (
    <StyledFooter className="footer">
      <a href="http://madeunlinked.com">@madeunlinked</a>
    </StyledFooter>
  );
}

export default Footer;
