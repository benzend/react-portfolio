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
  textArea: {
    marginTop: "6%",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    border: "none",
    borderRadius: "5px",
    padding: "4px",
  },
  formBox: {},
  formBox900: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    marginTop: "4%",
  },
  form: {
    backgroundColor: "#f98b0055",
    padding: "10px 30px",
    borderRadius: "15px",
    color: "#f98b00",
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

export default function HomeContactSection() {
  const classes = useStyles();
  const media900 = useMediaQuery("(min-width: 900px");
  return (
    <section className={classes.root}>
      <Box textAlign="center">
        <Typography color="primary" variant="h5" component="h3">
          Contact Me
        </Typography>
      </Box>
      <Box className={classes.formBox900} textAlign="center">
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
            <InputLabel className={classes.txtOrange} htmlFor="name">
              Name
            </InputLabel>
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
            <InputLabel className={classes.txtOrange} htmlFor="email">
              Email
            </InputLabel>
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
            <InputLabel className={classes.txtOrange} htmlFor="tel">
              Phone Number
            </InputLabel>
            <Input
              id="tel"
              name="tel"
              type="tel"
              aria-describedby="An input for your phone number"
            />
            <FormHelperText className={classes.txtOrange} id="my-helper-text">
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
