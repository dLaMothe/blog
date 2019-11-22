export function formatArticleDate(dateStr) {
  let date = new Date(dateStr);
  return (
    date.getUTCDay() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear()
  );
}
