export function getTimeDifference(futureDate: string) {
  const now = new Date();
  const targetDate = new Date(futureDate);

  const diff = targetDate.getTime() - now.getTime();

  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return {
    hours: diffHours,
    minutes: minutes,
  };
}
