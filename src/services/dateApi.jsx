import moment from "moment";

function getDate(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const today = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(date);
  return `${today.at(4).value}-${today.at(0).value}-${today.at(2).value}`;
}

function formatTime(time) {
  const formatedTime = moment(time, ["HH:mm"]).format("hh:mm a");
  return formatedTime;
}

function formatDate(date) {
  const formatedDate = moment(date).format("Do MMM YY");
  return formatedDate;
}

export { getDate, formatTime, formatDate };
