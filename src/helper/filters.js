function sortAnime(data, type = "asc") {
  if (type === "asc")
    data.sort((a, b) => new Date(a.timeStamp) - new Date(b.timeStamp));
  if (type === "desc")
    data.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
  return data;
}

export { sortAnime };
