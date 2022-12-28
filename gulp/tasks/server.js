export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};

if (newFileOnly !== fontFileName) {
  let fontName = fontFileName.split("-")[0]
    ? fontFileName.split("-")[0]
    : fontFileName;
  let fontWeight = fontFileName.split("-")[1]
    ? fontFileName.split("-")[1]
    : fontFileName;
  if (fontWeight.toLowerCase() === "thin") {
    fontWeight = 100;
  } else if (fontWeight.toLowerCase() === "extralight") {
    fontWeight = 200;
  } else if (fontWeight.toLowerCase() === "light") {
    fontWeight = 300;
  } else if (fontWeight.toLowerCase() === "medium") {
    fontWeight = 500;
  } else if (fontWeight.toLowerCase() === "semi-bold") {
    fontWeight = 600;
  } else if (fontWeight.toLowerCase() === "bold") {
    fontWeight = 700;
  } else if (
    fontWeight.toLowerCase() === "extrabold" ||
    fontWeight.toLowerCase() === "heavy"
  ) {
    fontWeight = 800;
  } else if (fontWeight.toLowerCase() === "black") {
    fontWeight = 900;
  } else {
    fontWeight = 400;
  }
}
