export function generateImageURL(size) {
  const randomID = Math.floor(Math.random() * 1000);

  return `https://picsum.photos/id/${randomID}/${size}`;
}
