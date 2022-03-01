import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material/";
import { useDispatch } from "react-redux";
import { LogoStyle } from "./style";
import logo from "../../assets/logo.png";
import { sidebarSlice } from "../../../core/context";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(sidebarSlice.actions.toggle());
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 1, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <LogoStyle src={logo} />
      </Toolbar>
    </AppBar>
  );
};
