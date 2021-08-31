const importAll = (r) => r.keys().map(r);
const GalleryPhotos = importAll(
  require.context("./", false, /\.(png|jpe?g|svg)$/)
);

export default GalleryPhotos;
