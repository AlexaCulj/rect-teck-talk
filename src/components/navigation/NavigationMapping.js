import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";

export const navigationNodes = [
  {
    label: "Home",
    path: "/",
    index: 0,
    icon: <HomeIcon />
  },
  {
    label: "Users",
    path: "/users",
    index: 1,
    icon: <FaceIcon />
  }
];
