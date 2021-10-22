export async function fetchCharacters(url) {
  const response = await fetch(url);
  const body = await response.json();
  const characterFetch = body.results;
  return characterFetch;
}
