import "./style.css";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createMarioCard } from "./components/marioCard";
import { fetchCharacters } from "./lib/fetchCharacter";
import createSearchElement from "./components/searchForm";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderElement();

  const searchForm = createSearchElement(handleSubmit);

  const mainComponent = createMainElement();

  const characterList = await fetchCharacters(
    "https://mario-kart-tour-api.herokuapp.com/api/v1/drivers"
  );

  const marioCards = characterList.map((character) =>
    createMarioCard(character)
  );

  async function handleSubmit(searchQuery) {
    const response = await fetchCharacters(
      "https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=" +
        searchQuery
    );
    const searchCard = createMarioCard(response);
    mainComponent.innerHTML = "";
    mainComponent.append(searchCard);
  }

  const footerComponent = createFooterElement();

  appElement.append(
    headerComponent,
    searchForm,
    mainComponent,
    footerComponent
  );
  mainComponent.append(...marioCards);
}

renderApp();
