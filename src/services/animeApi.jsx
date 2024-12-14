import { BASE_URL } from "../config/url";
import { getDate } from "./dateApi";

async function reacentEpisodesApi(offset) {
  const dateString = getDate(offset);
  const resp = await fetch(BASE_URL + "schedule?date=" + dateString);
  const data = await resp.json();
  return data;
}

async function animeAboutInfoApi(animeId) {
  const resp = await fetch(BASE_URL + "anime/" + animeId);
  const data = await resp.json();
  return data;
}

async function getEpisodes(animeId) {
  const resp = await fetch(BASE_URL + `anime/${animeId}/episodes`);
  const data = await resp.json();
  return data;
}

async function getEpisodeStreamingLinks(
  episodeId,
  categoryName = "sub",
  serverName = "hd-1"
) {
  const resp = await fetch(
    BASE_URL +
      `episode/sources?animeEpisodeId=${episodeId}?server=${serverName}&category=${categoryName}`
  );
  const data = await resp.json();
  return data;
}

async function getEpisodeServers(epId) {
  const resp = await fetch(BASE_URL + `episode/servers?animeEpisodeId=${epId}`);
  const data = await resp.json();
  return data;
}

async function getHomePage() {
  const res = await fetch(BASE_URL + "home");
  const data = await res.json();
  return data;
}

export {
  reacentEpisodesApi,
  animeAboutInfoApi,
  getEpisodes,
  getEpisodeStreamingLinks,
  getEpisodeServers,
  getHomePage,
};
