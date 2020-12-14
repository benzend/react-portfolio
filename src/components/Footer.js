import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";
import {
  Typography,
  Link,
  Grid,
  Box,
  makeStyles,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  links: {
    transition: "color .3s ease",
    "&:hover": {
      color: "#7250fd",
    },
  },
  container: {
    padding: "15px",
    marginTop: "-8rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10rem",
    },
  },
}));

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
            <Link className={classes.links} href="https://madeunlinked.com">
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
              <IconButton color="primary">
                <Twitter />
              </IconButton>
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
              <IconButton color="primary">
                <GitHub />
              </IconButton>
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
              <IconButton color="primary">
                <LinkedIn />
              </IconButton>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
