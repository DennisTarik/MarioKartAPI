import { createMarioCard } from "../components/marioCard";
import { fetchCharacters } from "./fetchCharacter";

export async function handleSubmit(searchQuery) {
  const response = await fetchCharacters(
    "https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name_contains?q=" +
      searchQuery
  );
  const searchCard = response.map((cardFetchElement) =>
    createMarioCard(cardFetchElement)
  );
  const mainComponent = document.querySelector("main");
  mainComponent.innerHTML = "";
  mainComponent.append(...searchCard);
}
