import React from "react";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  Toolbar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AdUnits, AddAlarm } from "@mui/icons-material/";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar, sidebarSlice } from "../../../core/context";
import { ContainerStyle, ContentStyle, drawerWidth } from "./style";

export const SideBar: React.FC = (props) => {
  const mobileOpen = useSelector(selectSidebar);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(sidebarSlice.actions.toggle());
  };

  const drawer = (
    <>
      <Toolbar />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AdUnits /> : <AddAlarm />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AdUnits /> : <AddAlarm />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <ContainerStyle>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      <ContentStyle>{props.children}</ContentStyle>
    </ContainerStyle>
  );
};
