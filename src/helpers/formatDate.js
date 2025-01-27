export default function formatDate(date) {
  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString("id-ID", options);
}
