//formats time for sunset and sunrise
function convertTime(unix) {
  let time = new Date(unix * 1000).toLocaleTimeString();
  let m = time.split(" ").slice(1);
  let hourMin = time.split(":");

  return `${hourMin[0]}:${hourMin[1]} ${m}`; //removes seconds from time format
}

export default convertTime;
