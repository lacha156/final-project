export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "HipHop" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Country" }
];

export function getGenres() {
  return genres.filter(g => g);
}
