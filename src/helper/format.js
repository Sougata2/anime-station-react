function getFormattedTime() {
  const time = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  }).format(new Date());
  const timeStamp = new Date(time).toISOString();
  return timeStamp;
}

function formatName(name, length=25) {
  return name.length < length ? name : name.slice(0, length) + "...";
}

export { getFormattedTime, formatName };
