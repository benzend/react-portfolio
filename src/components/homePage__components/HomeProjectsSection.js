import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";

import styled from "styled-components";

const StyledSection = styled.div`
  clip-path: polygon(89% 15%, 100% 0, 100% 100%, 0 100%, 0 15%);
  padding: 120px 0 70px 0;
  background: rgb(140, 192, 255);
  background: linear-gradient(
    63deg,
    rgba(140, 192, 255, 1) 0%,
    rgba(190, 234, 255, 1) 100%
  );

    text-align: center;
  }

`;

export default function HomeContactSection() {
  return (
    <StyledSection>
      <Typography variant="h5" component="h3">
        Projects
      </Typography>
      <Box></Box>
    </StyledSection>
  );
}
