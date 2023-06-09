import { format, formatDistanceToNow, parseISO } from "date-fns";
import classes from "./TimeAgo.module.css";

const TimeAgo = ({ timestamp }) => {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "بعد از ظهر" : "قبل از ظهر";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  let timeAgo = "";
  let newdate = "";
  let time = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    var newDate = format(date, "yyyy-MM-dd");
    var jalaliDate = new Date(newDate).toLocaleDateString("fa-IR");
    time = formatAMPM(date);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span>
      <i className={classes.date}>
        {jalaliDate} - {time}
      </i>
    </span>
  );
};

export default TimeAgo;
