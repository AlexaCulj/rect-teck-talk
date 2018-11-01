import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import { navigationNodes } from "./NavigationMapping";
import { getActiveTabIndex } from "./NavigationUtils";

const Navigation = ({ location: { pathname } }) => (
  <AppBar position="static">
    <Tabs value={getActiveTabIndex(navigationNodes, pathname)}>
      {navigationNodes.map((tab, index) => (
        <Link key={index} to={tab.path}>
          <Tab label={tab.label} icon={tab.icon} />
        </Link>
      ))}
    </Tabs>
  </AppBar>
);

export default withRouter(Navigation);
