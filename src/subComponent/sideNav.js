import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import CallSharpIcon from "@material-ui/icons/CallSharp";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import PhotoLibrarySharpIcon from "@material-ui/icons/PhotoLibrarySharp";
import Socials from "../subComponent/socials";

const useStyles = makeStyles({
  list: {
    width: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "20px",
  },
  fullList: {
    width: "auto",
  },
});

export default function SideNav({ appMenuList, appTitle }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {appMenuList.map(({ title, link }, index) => (
          <Link key={index} to={`/${link}`}>
            <ListItem button key={link}>
              {link === "about" ? <InfoSharpIcon /> : ""}
              {link === "products" ? <ShoppingCartSharpIcon /> : ""}
              {link === "projects" ? <PhotoLibrarySharpIcon /> : ""}
              {link === "contact" ? <CallSharpIcon /> : ""}
              <ListItemText style={{ marginLeft: 10 }} primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className="mobile">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: 1.5 }}>
              <Link onClick={toggleDrawer(anchor, false)} to="/">
                {appTitle}
              </Link>
            </div>
            {list(anchor)}
            <Socials />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
