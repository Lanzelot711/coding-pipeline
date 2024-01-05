export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

export function isPastDue(date) {
  const now = new Date();
  const dueDate = new Date(date);
  return dueDate < now;
}