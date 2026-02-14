export const blur = (blur: boolean): void => {
  const root = document.querySelector<HTMLDivElement>("#root");
  if (root) {
    if (blur) {
      root.style.filter = "blur(10px)";
    } else {
      root.style.filter = "";
    }
  }
};
