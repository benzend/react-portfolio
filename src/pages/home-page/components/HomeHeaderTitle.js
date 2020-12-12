import { Box, Typography } from "@material-ui/core";

function HomeHeaderTitle({ headerTxt, subtitle }) {
  return (
    <Box>
      <Typography
        className={headerTxt}
        color="primary"
        component="h1"
        variant="h4"
      >
        Benjamin Scott
      </Typography>
      <Typography
        className={subtitle}
        color="primary"
        component="h2"
        variant="h5"
      >
        Frontend Web Developer
      </Typography>
    </Box>
  );
}

export default HomeHeaderTitle;
