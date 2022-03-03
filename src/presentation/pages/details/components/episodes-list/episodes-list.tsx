import { Box, Tabs, Tab, Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { handleEither } from "../../../../../core/models";
import { Episode } from "../../../../../domain/models";
import { GetEpisodes } from "../../../../../domain/usecases";
import { Loading } from "../../../../components";
import {
  EpisodeContainerStyle,
  EpisodeLabelContainerStyle,
  EpisodeTitleStyle,
  LabelStyle,
  ContainerStyle,
} from "./style";

type EpisodesListProps = {
  episodesepsUrl: string[];
  getEpisodes: GetEpisodes;
};

export const EpisodesList: React.FC<EpisodesListProps> = ({
  episodesepsUrl,
  getEpisodes,
}) => {
  const [episodes, setEpisodes] = useState<Episode.Model[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchEpisodes = () => {
    const eps =
      episodesepsUrl.map((ep) => {
        const splitted = ep.split("/");
        return Number(splitted[splitted.length - 1]);
      }) ?? [];

    setLoading(true);

    getEpisodes
      .get(eps)
      .then((either) => handleEither(either, setEpisodes, setError))
      .finally(() => setLoading(false));
  };

  const handleChangeEpisode = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setSelectedEpisode(newValue);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setError(undefined);
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <>
      {loading && (
        <Loading containerSx={{ width: "100%", marginTop: "32px" }} />
      )}
      {episodes.length !== 0 && (
        <ContainerStyle>
          <Tabs
            value={selectedEpisode}
            onChange={handleChangeEpisode}
            sx={{
              color: "primary.contrastText",
            }}
            variant="scrollable"
            scrollButtons="auto"
            textColor="secondary"
            indicatorColor="secondary"
          >
            {episodes.map((ep) => (
              <Tab key={ep.id} label={ep.episode} />
            ))}
          </Tabs>
          <EpisodeContainerStyle>
            <EpisodeLabelContainerStyle>
              <EpisodeTitleStyle>ID</EpisodeTitleStyle>
              <LabelStyle>{episodes[selectedEpisode].id || "-"}</LabelStyle>
            </EpisodeLabelContainerStyle>
            <EpisodeLabelContainerStyle>
              <EpisodeTitleStyle>Name</EpisodeTitleStyle>
              <LabelStyle>{episodes[selectedEpisode].name || "-"}</LabelStyle>
            </EpisodeLabelContainerStyle>
            <EpisodeLabelContainerStyle>
              <EpisodeTitleStyle>Air Date</EpisodeTitleStyle>
              <LabelStyle>
                {episodes[selectedEpisode].air_date || "-"}
              </LabelStyle>
            </EpisodeLabelContainerStyle>
            <EpisodeLabelContainerStyle>
              <EpisodeTitleStyle>Episode</EpisodeTitleStyle>
              <LabelStyle>
                {episodes[selectedEpisode].episode || "-"}
              </LabelStyle>
            </EpisodeLabelContainerStyle>
          </EpisodeContainerStyle>
        </ContainerStyle>
      )}
      <Snackbar
        open={error !== undefined}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    </>
  );
};
