export function formatDate(dateString: string): string {
    const months: string[] = [
      "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
  
    const date = new Date(dateString);
    const year: number = date.getFullYear();
    const month: string = months[date.getMonth()];
    const day: number = date.getDate();
  
    return `${month} ${day}, ${year}`;
  }