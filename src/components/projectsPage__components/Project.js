import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    borderRadius: 20,
    boxShadow: "2px 3px 5px #0004",
    backgroundColor: "#f98b00aa",
  },
  rootWide: {
    margin: "30px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    boxShadow: "0 0 10px #0009",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const media900 = useMediaQuery("(min-width: 900px)");

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={`${classes.root} ${media900 ? classes.rootWide : ""}`}>
      <CardHeader title={props.headerTitle} subheader={props.headerSubheader} />
      <CardMedia
        className={classes.media}
        image={props.imgUrl}
        title={props.imgTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {props.miniDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="default" href={props.ghHref}>
          <GitHubIcon />
        </IconButton>
        <IconButton color="default" href={props.liveHref}>
          <LanguageIcon />
        </IconButton>
        <IconButton
          color="default"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more button"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.fullDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
