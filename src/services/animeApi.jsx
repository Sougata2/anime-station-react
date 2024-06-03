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

export { reacentEpisodesApi, animeAboutInfoApi };
