const weekdayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]


const addZero = (number) => {
  return number > 9 ? number : `0${number}`;

}
/*

  Date docs on mdn -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  ex. use -> findTalkDateAndTime('2020-02-19T09:30:00.000Z','45')

*/

const findTalkDateAndTime = (startTime, duration) => {
  if (!startTime) return null
  const date = new Date(startTime);

  // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (isNaN(date.getTime())) return null

  // Get date in milliseconds
  const dateInMs = date.getTime()
  // Get duration in milliseconds
  const durationInMs = duration * 60 * 1000;
  // Add duration to date to find end time
  let endDateInMs = new Date(dateInMs + durationInMs)

  // Find day as a string from the days array
  const day = weekdayNames[endDateInMs.getDay()];
  // Find the start time from the date variable
  const start = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
  // Find the end date from the end date in milliseconds variabel ONLY if duration variable exists, else set end to empty string
  const end = duration ? `${addZero(endDateInMs.getHours())}:${addZero(endDateInMs.getMinutes())}`: '';

  return {
    day,
    start,
    end
  }
}

export default findTalkDateAndTime;
