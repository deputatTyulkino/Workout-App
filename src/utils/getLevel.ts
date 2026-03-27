export const getLevel = (count: number = 0) => {
  if (count < 10) return "beginner";
  else if (count >= 10 && count < 20) return "amateur";
  else return "pro";
};
