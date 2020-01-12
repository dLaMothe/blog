export function formatArticleDate(dateStr) {
  let date = new Date(dateStr);
  return (
    date.getUTCDate() +
    '.' +
    (date.getUTCMonth() + 1) +
    '.' +
    date.getUTCFullYear()
  );
}
