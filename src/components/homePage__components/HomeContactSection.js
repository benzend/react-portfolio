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
} from "@material-ui/core";

import ContactMailIcon from "@material-ui/icons/ContactMail";

const useStyles = makeStyles({
  root: {
    background: "rgb(112, 168, 255)",
    background:
      "linear-gradient(34deg, rgba(112, 168, 255, 1) 0%, rgba(129, 199, 255, 1) 100%)",
    borderRadius: "10px",
    padding: "6%",
    margin: "8% 0",
  },
  textArea: {
    marginTop: "6%",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    border: "none",
    borderRadius: "5px",
    padding: "4px",
  },
  root900: {},
  formBox: {},
  formBox900: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    marginTop: "4%",
  },
  form900: {
    flex: 1,
  },
  imgContainer900: {
    flex: 1,
  },
  img900: {
    width: "100%",
    borderRadius: "20px",
  },
});

export default function HomeContactSection({ media900 }) {
  const classes = useStyles();
  return (
    <section className={media900 ? classes.root900 : classes.root}>
      <Box textAlign="center">
        <Typography variant="h5" component="h3">
          Contact Me
        </Typography>
      </Box>
      <Box className={classes.formBox900} textAlign="center">
        {media900 ? (
          <div className={classes.imgContainer900}>
            <img
              className={classes.img900}
              src="https://www.dentonsgmbh.com/-/media/images/website/background-images/landing-pages/whats-different-about-dentons/contact-us/contact3.jpg"
            />
          </div>
        ) : null}
        <form className={classes.form900} name="contact" method="POST">
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
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </section>
  );
}
