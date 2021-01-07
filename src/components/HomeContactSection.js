import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextareaAutosize,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    padding: "6%",
    margin: "8% 0",
  },
  title: {
    transform: "translateY(-50px)",
    opacity: 0,
    transition: "all 1s ease",
    "&.active": {
      transform: "translateY(0)",
      opacity: 1,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  textArea: {
    marginTop: "6%",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    border: "none",
    borderRadius: "5px",
    padding: "4px",
  },
  formBox: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    marginTop: "4%",
    transform: "translateX(40px)",
    opacity: 0,
    transition: "all 1s ease",
    "&.active": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  form: {
    padding: "10px 30px",
    borderRadius: "15px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flex: 1,
      padding: ".3%",
      margin: "1%",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "2%",
      padding: "0",
    },
  },
  imgContainer: {
    flex: 1,
    [theme.breakpoints.up("md")]: {
      margin: "1%",
    },
  },
  img: {
    width: "100%",
    borderRadius: "20px",
  },
  txtOrange: {
    color: "#f98b00",
  },
}));

export const HomeContactSection = ({ yoffset }) => {
  const classes = useStyles();
  const media900 = useMediaQuery("(min-width: 900px");
  return (
    <section id="contact" className={classes.root}>
      <Box textAlign="center">
        <Typography
          className={yoffset > 1500 ? "active " + classes.title : classes.title}
          variant="h3"
          component="h3"
        >
          Contact Me
        </Typography>
      </Box>
      <Box
        className={
          yoffset > 1500 ? "active " + classes.formBox : classes.formBox
        }
        textAlign="center"
      >
        {media900 ? (
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src="https://www.dentonsgmbh.com/-/media/images/website/background-images/landing-pages/whats-different-about-dentons/contact-us/contact3.jpg"
              alt="There is a person with a phone and a keyboard"
            />
          </div>
        ) : null}
        <form className={classes.form} name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />

          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              type="text"
              aria-describedby="An input for your name"
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              aria-describedby="An input for you email address"
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="tel">Phone Number</InputLabel>
            <Input
              id="tel"
              name="tel"
              type="tel"
              aria-describedby="An input for your phone number"
            />
            <FormHelperText id="my-helper-text">
              (Your phone number isn't required)
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <TextareaAutosize
              className={classes.textArea}
              placeholder="What would you like to say?"
              id="message"
              name="message"
              rows="5"
              cols="28"
            ></TextareaAutosize>
          </FormControl>

          <Box marginTop="20px">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </section>
  );
};
