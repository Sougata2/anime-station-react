export function saveAnimeInfo(animeId, epId) {
  window.localStorage.setItem(
    animeId,
    JSON.stringify({ epId })
  );
}

export function getAnimeInfo(animeId) {
  const dataString = window.localStorage.getItem(animeId);
  const data = JSON.parse(dataString);
  return { ...data };
}
