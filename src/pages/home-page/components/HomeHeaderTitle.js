import { Box, Typography } from "@material-ui/core";

function HomeHeaderTitle({ headerTxt, subtitle }) {
  return (
    <Box>
      <Typography className={headerTxt} component="h1" variant="h1">
        Benjamin Scott
      </Typography>
      <Typography
        className={subtitle}
        color="textSecondary"
        component="h3"
        variant="h3"
      >
        Front-End Web Developer
      </Typography>
    </Box>
  );
}

export default HomeHeaderTitle;
