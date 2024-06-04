export const TimeChange = (time) => {
  const date = new Date(time);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // 'long' for full month name
  const year = date.getFullYear();

  const dateMonthYear = `${day} ${month} ${year}`;

  return dateMonthYear;
};
