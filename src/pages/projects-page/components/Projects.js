import Grid from "@material-ui/core/Grid";
import Project from "./Project";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  gridItem: {
    margin: "10px",
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <section id="projects" className="section">
      <Grid justify="center" container>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="React API App"
            headerSubheader="A React Application"
            imgUrl="./images/react-api.png"
            imgTitle="An Image of my React API Handler"
            miniDescription="A react app that handles an api that pulls random people and their info."
            ghHref="https://github.com/benzend/react-api-handler"
            liveHref="https://serene-kirch-b5fcfb.netlify.app/"
            fullDescription="This app handles each person that is pulled into the frontend. Each person can be organized 
            into a folder of your choice AND you can create/delete/edit folders as you please. This project uses lots of state
            and destructuring."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="Todo App"
            headerSubheader="A React Application"
            imgUrl="./images/todo-list.png"
            imgTitle="An Image of my todo application"
            miniDescription="A react app that makes, edits, organized and deletes list items."
            ghHref="https://github.com/benzend/todo-application"
            liveHref="https://quizzical-edison-93c715.netlify.app/"
            fullDescription="A simple todo app created from scratch. I worked on making sure there were no bugs and practiced destructuring and making code clean."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="Pomodoro Timer"
            headerSubheader="A vanilla JavaScript Application"
            imgUrl="./images/thumbnails/PomodoroTimer-thumbnail.png"
            imgTitle="An Image of a Pomodoro Timer"
            miniDescription="A type of timer that is used for efficient time management."
            ghHref="https://github.com/benzend/pomodoro-timer"
            liveHref="https://benzend.github.io/pomodoro-timer/"
            fullDescription="I built this in a challenge against someone else to see who could have the 
            best design/functionality in a day. Learned a lot about JavaScript and using 
            numbers in it; converting seconds to minutes to hours and stuff like that. I also
            implemented a background changer just for the hell of it."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="Tic-Tac-Toe"
            headerSubheader="A vanilla JavaScript Application"
            imgUrl="./images/thumbnails/TicTacToe-example-thumbnail.png"
            imgTitle="An Image of My Tic-Tac-Toe Game"
            miniDescription="One of my first ever projects, a really cool JavaScript heavy 
            Tic-Tac-Toe game."
            ghHref="https://github.com/benzend/tic-tac-toe"
            liveHref="https://benzend.github.io/tic-tac-toe/"
            fullDescription="This project helped engrain JavaScript fundamentals into my head, while letting me know
            where I was at with JS. The bot you play against is not
            smart so winning against it is easy.  The biggest thing I learned here
            was about using lots of functions that check and make sure you can only do something when you're supposed to. I left 
            the old code in there, just commented out in case someone wants to look at it."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="An RPG Game"
            headerSubheader="A vanilla JavaScript Application"
            imgUrl="./images/thumbnails/Mini-RPG-Game-example-thumbnail.png"
            imgTitle="An Image of My RPG Game"
            miniDescription="This is a tiny game where you attack 3 enemies, buy health, and eat food."
            ghHref="https://github.com/benzend/small-rpg-game"
            liveHref="https://benzend.github.io/small-rpg-game/"
            fullDescription="This is a very simple game where you
            trade blows with the enemies and gain coins per kill. There
            is also a merchant that you can buy health from and food where
            you can just eat it to gain health."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="Accounting Website"
            headerSubheader="A Vanilla JavaScript Website"
            imgUrl="./images/thumbnails/Accounting-Website-example-thumbnail.png"
            imgTitle="An Image of My RPG Game"
            miniDescription="A simple SPA (website) that was made to inspire an accountant I know."
            ghHref="https://github.com/benzend/accounting-website"
            liveHref="https://benzend.github.io/accounting-website/"
            fullDescription=" A simple yet clean SPA. I had lots of fun figuring out which animations
            to use and went for a nice look. My favorite thing about this project 
            is the animations I made in the bottom right of the footer for the little social icons."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="JumpStart Website"
            headerSubheader="A Vanilla JavaScript Application"
            imgUrl="./images/thumbnails/JumpStart-example-thumbnail.png"
            imgTitle="An image of the JumpStart Website"
            miniDescription="A multi page website designed with minimalistic principles in mind (also my first website)."
            ghHref="ttps://github.com/benzend/jumpstart-website"
            liveHref="https://benzend.github.io/jumpstart-website/"
            fullDescription="This was definitely a bigger project at the time. My main focus was to
            figure out the title animation, getting the hang of sizing images and having multiple pages
            as if it were an actual website. 
            Also figured out how to design contact and sign up forms here."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="Language Learning App"
            headerSubheader="A React Application"
            imgUrl="./images/thumbnails/LanguageApp-thumbnail.png"
            imgTitle="An image of my language learning application"
            miniDescription="An app designed to help teach people other languages."
            ghHref="https://github.com/benzend/language-learning-app"
            liveHref="https://thirsty-wright-d1d04e.netlify.app/"
            fullDescription="The Goal of this project was to create something larger and more complex
            displaying my React.js ability. It definitely has a Duolingo-esk feeling
            to it, having a main section that displays your lessons you can do and in 
            those lessons are a functional progress bar, an exit button and lots of 
            various matching and fill in the blank games you can play. This displays 
            my knowledge of react hooks/state, components, styled-components and react-router-dom functionality. 
            Also this is a work in progress, I do want it to be a full fledged app in the future."
          />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Project
            headerTitle="Portfolio"
            headerSubheader="A vanilla JavaScript Website"
            imgUrl="./images/thumbnails/Portfolio-thumbnail.png"
            imgTitle="An image of my older portfolio."
            miniDescription="One of my recent portfolios that I was very proud of."
            ghHref="https://github.com/benzend/creative-portfolio"
            liveHref="https://benzend.github.io/creative-portfolio/"
            fullDescription=" A pretty cool Portfolio I made, stockpiled with animations and oddities that
            really has an fun look to it. "
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default Projects;
