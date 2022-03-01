import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectCharacter,
  selectSidebar,
  sidebarSlice,
} from "../../../core/context";
import { ContainerStyle, ImageStyle, LabelStyle } from "./style";

export const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useSelector(selectCharacter(Number(id)));
  const sidebar = useSelector(selectSidebar);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickBack = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(sidebarSlice.actions.setEnabled(false));

    return () => {
      dispatch(sidebarSlice.actions.setEnabled(true));
    };
  }, []);

  return (
    <ContainerStyle>
      <Button
        variant="text"
        startIcon={<ArrowBack />}
        onClick={handleClickBack}
      >
        Back
      </Button>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <ImageStyle src={data?.image} />
        <Box
          sx={{
            flexGrow: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 4,
            marginTop: 4,
          }}
        >
          <LabelStyle>{data?.id}</LabelStyle>
          <LabelStyle>{data?.name}</LabelStyle>
          <LabelStyle>{data?.status}</LabelStyle>
          <LabelStyle>{data?.species}</LabelStyle>
          <LabelStyle>{data?.type}</LabelStyle>
          <LabelStyle>{data?.gender}</LabelStyle>
          <LabelStyle>{data?.origin.name}</LabelStyle>
          <LabelStyle>{data?.created}</LabelStyle>
        </Box>
      </Box>
    </ContainerStyle>
  );
};
