export const capitalize = (word: string): string => {
  return word.at(0)?.toUpperCase() + word.slice(1);
};
