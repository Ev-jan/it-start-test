export const formatDateForBackend = (dateStr: string) => {
  const date = new Date(dateStr);

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Moscow",
  }).format(date);
};

export const formatDateForDisplay = (dateStr: string) =>
  dateStr.split(".").reverse().join("-");
