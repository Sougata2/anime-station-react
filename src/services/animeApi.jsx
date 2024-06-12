import { BASE_URL } from "../config/url";
import { getDate } from "./dateApi";

async function reacentEpisodesApi(offset) {
  const dateString = getDate(offset);
  const resp = await fetch(BASE_URL + "anime/schedule?date=" + dateString);
  const data = await resp.json();
  return data;
}

async function animeAboutInfoApi(animeId) {
  const resp = await fetch(BASE_URL + "anime/info?id=" + animeId);
  const data = await resp.json();
  return data;
}

async function getEpisodes(animeId) {
  const resp = await fetch(BASE_URL + "anime/episodes/" + animeId);
  const data = await resp.json();
  return data;
}

async function getEpisodeStreamingLinks(
  episodeId,
  categoryName = "sub",
  serverName = "vidstreaming"
) {
  try {
    const resp = await fetch(
      BASE_URL +
        "anime/episode-srcs?id=" +
        episodeId +
        "&server=" +
        serverName +
        "&category=" +
        categoryName
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
}

export {
  reacentEpisodesApi,
  animeAboutInfoApi,
  getEpisodes,
  getEpisodeStreamingLinks,
};
