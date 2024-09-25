class DateTimeFormat {
  static getFormattedDate(date: Date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${day} ${month}, ${year} ${hour} ${min}`;
  }

  static formatDateString(dateString: string) {
    if (dateString != undefined) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
      }).format(date);
    }
  }
}

export default DateTimeFormat;
