import { Link } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Home,
  Work,
  ImportContacts,
  Build,
  Info,
} from "@material-ui/icons";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  List,
  IconButton,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const DrawerContainer = ({ classes, open, setOpen }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton color="primary" onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link className={classes.linkStyle} to="/">
          <ListItem color="primary" button key="Home">
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link className={classes.linkStyle} to="/projects">
          <ListItem button key="Projects">
            <ListItemIcon>
              <Work color="primary" />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link className={classes.linkStyle} to="/about">
          <ListItem button key="About">
            <ListItemIcon>
              <Info color="primary" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button key="Blog">
          <ListItemIcon>
            <ImportContacts color="primary" />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button key="Services">
          <ListItemIcon>
            <Build color="primary" />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
      </List>
    </Drawer>
  );
};
