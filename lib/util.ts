export const stripSpecialCharacters = (val: string): string =>
  val.replace(/[^0-9a-z]/gi, "");
