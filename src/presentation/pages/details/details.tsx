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
import { ContainerStyle, ImageStyle, LabelStyle, TitleStyle } from "./style";

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
        sx={{ color: "secondary.main" }}
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
          <TitleStyle>ID</TitleStyle>
          <LabelStyle>{data?.id || '-'}</LabelStyle>
          <TitleStyle>Name</TitleStyle>
          <LabelStyle>{data?.name || '-'}</LabelStyle>
          <TitleStyle>Status</TitleStyle>
          <LabelStyle>{data?.status || '-'}</LabelStyle>
          <TitleStyle>Specie</TitleStyle>
          <LabelStyle>{data?.species || '-'}</LabelStyle>
          <TitleStyle>Type</TitleStyle>
          <LabelStyle>{data?.type || '-'}</LabelStyle>
          <TitleStyle>Gender</TitleStyle>
          <LabelStyle>{data?.gender || '-'}</LabelStyle>
          <TitleStyle>Origin</TitleStyle>
          <LabelStyle>{data?.origin.name || '-'}</LabelStyle>
          <TitleStyle>Created</TitleStyle>
          <LabelStyle>{new Date(data?.created ?? '').toDateString() || '-'}</LabelStyle>
        </Box>
      </Box>
    </ContainerStyle>
  );
};
