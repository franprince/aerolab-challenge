function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
export default formatDate;
