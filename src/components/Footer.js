import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";
import { Typography, Link, Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  links: {
    transition: "color .3s ease",
    "&:hover": {
      color: "#fff",
    },
  },
  container: {
    padding: "15px",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid
        justify="center"
        alignItems="center"
        spacing={3}
        direction="row"
        container
      >
        <Grid item>
          <Typography>
            <Link
              className={classes.links}
              href="https://benjamin-scott.netlify.app/"
            >
              @madeunlinked
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Link
              className={classes.links}
              rel="noreferrer"
              href="https://twitter.com/TheBenzend"
              target="_blank"
            >
              <Twitter />
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Link
              className={classes.links}
              rel="noreferrer"
              href="https://github.com/benzend"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Link
              className={classes.links}
              rel="noreferrer"
              href="https://www.linkedin.com/in/benjamin-scott-62a3741b1/"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
