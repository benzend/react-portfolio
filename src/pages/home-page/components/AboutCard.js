import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "300px",
    marginBottom: "1.8rem",
  },
}));

export const AboutCard = ({ children }) => {
  const { root } = useStyles();
  return (
    <Typography className={root} component="p" variant="body1">
      {children}
    </Typography>
  );
};
