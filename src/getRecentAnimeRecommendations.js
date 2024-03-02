import React, { useEffect, useState } from "react";

// const url = "https://api.jikan.moe/v4/recommendations/anime";
const url = "https://api-aniwatch.onrender.com/anime/schedule?date=";
const info = "https://api-aniwatch.onrender.com/anime/info?id=";

export default function GetRecentAnimeRecommendations() {
  const [month, date, year] = new Date()
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/");
  const [today, setToday] = useState(`${year}-${month}-${date}`);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(
    function () {
      async function getResponse() {
        setIsLoading(true);
        console.log(url + today);
        const res = await fetch(url + today);
        const data = await res.json();
        console.log(data.scheduledAnimes);
        setData(data.scheduledAnimes);
        setIsLoading(false);
      }
      getResponse();
    },
    [today]
  );

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading &&
        data.map((anime) => <AnimeCard data={anime} key={anime.id} />)}
    </>
  );
}

function AnimeCard({ data }) {
  const { name, jname, time, id } = data;
  const [hours, minutes] = time.split(":");
  const hours_twelveHourFormat = hours % 12 ? hours % 12 : 12;
  const am_or_pm = hours >= 12 ? "PM" : "AM";
  const timeStamp = `${hours_twelveHourFormat}:${minutes} ${am_or_pm}`;
  console.log(hours, minutes, hours_twelveHourFormat, am_or_pm);

  return (
    <div className="recent-anime-card">
      <div className="name">{name}</div>
      <div className="time">
        {/* <span>Airing at </span> */}
        {timeStamp}
      </div>
    </div>
  );
}

function Loader() {
  return <h1>Loading...</h1>;
}
