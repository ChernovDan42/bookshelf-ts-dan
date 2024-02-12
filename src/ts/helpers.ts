 export function truncateBookName(bookName: string, maxLength = 99) {
    if (bookName.length > maxLength) {
      return `${bookName.slice(0, maxLength - 3)}...`;
    } else {
      return bookName;
    }
  }