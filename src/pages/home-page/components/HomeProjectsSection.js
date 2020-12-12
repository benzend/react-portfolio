import { Box, Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: " 8% 0",
    [theme.breakpoints.up("md")]: {},
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  img: {
    borderRadius: "10px",
    boxShadow: "0 2px 7px #0006",
  },
}));

export const HomeProjectsSection = () => {
  const { root, title, img } = useStyles();

  return (
    <Box className={root}>
      <Typography className={title} variant="h3" component="h3">
        Projects
      </Typography>
      <Grid spacing={5} justify="center" direction="row" container>
        <Grid item>
          <Box>
            <img
              className={img}
              src="./images/thumbnails/languageApp-thumbnail.png"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img
              className={img}
              src="./images/thumbnails/TicTacToe-example-thumbnail.png"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img
              className={img}
              src="./images/thumbnails/Accounting-Website-example-thumbnail.png"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img
              className={img}
              src="./images/thumbnails/languageApp-thumbnail.png"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img
              className={img}
              src="./images/thumbnails/TicTacToe-example-thumbnail.png"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img
              className={img}
              src="./images/thumbnails/Accounting-Website-example-thumbnail.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
