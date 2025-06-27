import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

const figures = document.querySelectorAll("figure");

for (const figure of figures) {
  const image = figure.querySelector("img");

  if (!image) continue;

  fac
    .getColorAsync(image, { algorithm: "simple" })
    .then((color) => {
      image.style.filter = `drop-shadow(0 0 10px var(--night)) drop-shadow(0 0 40px ${color.rgba})`;
    })
    .catch((e) => {
      console.error("Color extraction failed:", e);
    });
}
