import React, { useEffect, useState } from "react";
import {
  Drawer,
  FormControl,
  InputLabel,
  Select,
  Toolbar,
  MenuItem,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Clear } from "@mui/icons-material";
import {
  selectSidebar,
  selectFilter,
  sidebarSlice,
  charactersSlice,
} from "../../../core/context";
import { ContainerStyle, ContentStyle, drawerWidth } from "./style";
import { Character } from "../../../domain/models";

export const SideBar: React.FC = (props) => {
  const store = useSelector(selectSidebar);
  const filter = useSelector(selectFilter);
  const [name, setName] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(sidebarSlice.actions.toggle());
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const clearNameFilter = () => {
    setName("");
    dispatch(charactersSlice.actions.setNameFilter(undefined));
  };

  const selectStatus = (value: string) => {
    dispatch(
      charactersSlice.actions.setStatusFilter(value as Character.StatusType)
    );
  };

  const selectGender = (value: string) => {
    dispatch(
      charactersSlice.actions.setGenderFilter(value as Character.GenderType)
    );
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(charactersSlice.actions.setNameFilter(name));
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [name]);

  const drawer = (
    <>
      <Toolbar />
      <FormControl sx={{ m: 1, minWidth: 80 }} variant="outlined">
        <InputLabel htmlFor="outlined-name">Name</InputLabel>
        <OutlinedInput
          id="outlined-name"
          value={name ?? ""}
          onChange={(event) => handleChangeName(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="clear name"
                onClick={clearNameFilter}
                edge="end"
              >
                <Clear />
              </IconButton>
            </InputAdornment>
          }
          label="Name"
        />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          displayEmpty
          labelId="status-label"
          id="status-id"
          value={filter.status ?? ""}
          label="Status"
          onChange={(event) => selectStatus(event.target.value)}
        >
          <MenuItem value={undefined}>
            <em>None</em>
          </MenuItem>
          {Object.values(Character.StatusType).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          displayEmpty
          labelId="gender-label"
          id="gender-id"
          value={filter.gender ?? ""}
          label="Gender"
          onChange={(event) =>
            selectGender(event.target.value as Character.GenderType)
          }
        >
          <MenuItem value={undefined}>
            <em>None</em>
          </MenuItem>
          {Object.values(Character.GenderType).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );

  return (
    <ContainerStyle>
      <Drawer
        variant="temporary"
        open={store.mobileOpen && store.enabled}
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
      {store.enabled && (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
      <ContentStyle>
        <Toolbar />
        {props.children}
      </ContentStyle>
    </ContainerStyle>
  );
};
