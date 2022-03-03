import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCharacter, sidebarSlice } from "../../../core/context";
import { GetEpisodes } from "../../../domain/usecases";
import { EpisodesList } from "./components";
import {
  ContainerStyle,
  ImageStyle,
  LabelStyle,
  TitleStyle,
  ContainerInfoStyle,
  ContainerDataStyle,
} from "./style";

type DetailsPageProps = {
  getEpisodes: GetEpisodes;
};

export const DetailsPage: React.FC<DetailsPageProps> = ({ getEpisodes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useSelector(selectCharacter(Number(id)));
  const dispatch = useDispatch();

  const handleClickBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (data === undefined) {
      handleClickBack();
    } else {
      dispatch(sidebarSlice.actions.setEnabled(false));

      return () => {
        dispatch(sidebarSlice.actions.setEnabled(true));
      };
    }
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
      <ContainerInfoStyle>
        <ImageStyle src={data?.image} />
        <ContainerDataStyle>
          <TitleStyle>ID</TitleStyle>
          <LabelStyle>{data?.id || "-"}</LabelStyle>
          <TitleStyle>Name</TitleStyle>
          <LabelStyle>{data?.name || "-"}</LabelStyle>
          <TitleStyle>Status</TitleStyle>
          <LabelStyle>{data?.status || "-"}</LabelStyle>
          <TitleStyle>Specie</TitleStyle>
          <LabelStyle>{data?.species || "-"}</LabelStyle>
          <TitleStyle>Type</TitleStyle>
          <LabelStyle>{data?.type || "-"}</LabelStyle>
          <TitleStyle>Gender</TitleStyle>
          <LabelStyle>{data?.gender || "-"}</LabelStyle>
          <TitleStyle>Origin</TitleStyle>
          <LabelStyle>{data?.origin.name || "-"}</LabelStyle>
          <TitleStyle>Created</TitleStyle>
          <LabelStyle>
            {new Date(data?.created ?? "").toDateString() || "-"}
          </LabelStyle>
        </ContainerDataStyle>
      </ContainerInfoStyle>
      {data?.episode !== undefined && data?.episode.length !== 0 && (
        <EpisodesList episodesepsUrl={data.episode} getEpisodes={getEpisodes} />
      )}
    </ContainerStyle>
  );
};
